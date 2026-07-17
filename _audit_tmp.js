const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(m => m[1]);
const dup = {};
ids.forEach(id => { dup[id] = (dup[id] || 0) + 1; });
const dups = Object.entries(dup).filter(([, c]) => c > 1);
console.log('Duplicate IDs:', dups.length ? dups.map(([id, c]) => id + ' x' + c).join(', ') : 'none');
['div', 'section', 'a', 'ul', 'li', 'button'].forEach(t => {
  const open = (html.match(new RegExp('<' + t + '[\\s>]', 'gi')) || []).length;
  const close = (html.match(new RegExp('</' + t + '>', 'gi')) || []).length;
  if (open !== close) console.log('Mismatch ' + t + ': open=' + open + ' close=' + close);
});
