#!/usr/bin/env node
/* Builds the single-file site: src/index.html with its stylesheet and every script inlined.
 *
 *   node build.js                                   → index.html
 *   node build.js --title "My chess" --out dist/index.html --extra my-sync.js
 *
 * --extra (repeatable) adds a script just before src/ui/main.js, so it can register hooks
 * (Store.onSave, Store.migrations…) before the app starts. No dependency needed.
 */
const fs = require('fs');
const path = require('path');

const SRC = path.join(__dirname, 'src');
const read = file => fs.readFileSync(file, 'utf8');

function build({ title = 'betterchess', out = path.join(__dirname, 'index.html'), extras = [] } = {}) {
  let html = read(path.join(SRC, 'index.html'));

  /* scripts, in page order, with the extras before main.js */
  const scripts = [...html.matchAll(/<script src="([^"]+)"><\/script>/g)].map(m => path.join(SRC, m[1]));
  const main = scripts.findIndex(f => f.endsWith(path.join('ui', 'main.js')));
  scripts.splice(main, 0, ...extras.map(f => path.resolve(f)));
  const js = scripts.map(f => '/* ' + path.relative(__dirname, f) + ' */\n' + read(f).trim()).join('\n\n');
  if (/<\/script/i.test(js)) throw new Error('A script contains "</script", which would end the inline block.');

  /* the block of <script> tags (and its comments) becomes one inline script */
  const first = html.search(/<!-- [^>]*-->\n<script src=|<script src=/), last = html.lastIndexOf('</script>') + '</script>'.length;
  html = html.slice(0, first) + '<script>\n' + js + '\n</script>' + html.slice(last);

  html = html
    .replace(/<!-- Development page[\s\S]*?-->\n/, '')
    .replace('<link rel="stylesheet" href="style.css">', () => '<style>\n' + read(path.join(SRC, 'style.css')).trim() + '\n</style>')
    .replace(/<title>[^<]*<\/title>/, () => '<title>' + title + '</title>')
    .replace(/<h1>[^<]*<\/h1>/, () => '<h1>' + title + '</h1>');

  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, html);
  return { out, bytes: Buffer.byteLength(html) };
}

if (require.main === module) {
  const args = process.argv.slice(2), opts = { extras: [] };
  for (let i = 0; i < args.length; i++) {
    const value = args[++i];
    if (args[i - 1] === '--title') opts.title = value;
    else if (args[i - 1] === '--out') opts.out = path.resolve(value);
    else if (args[i - 1] === '--extra') opts.extras.push(value);
    else { console.error('Unknown option ' + args[i - 1]); process.exit(1); }
  }
  const r = build(opts);
  console.log('Wrote ' + path.relative(process.cwd(), r.out) + ' (' + Math.round(r.bytes / 1024) + ' KB)');
}

module.exports = build;
