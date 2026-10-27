const fs = require('fs');

const content = fs.readFileSync('src/constants/products.js', 'utf8');

// Find all import statements
const imports = {};
const importRegex = /import\s+([a-zA-Z0-9_$]+)\s+from\s+["']([^"']+)["']/g;
let match;
while ((match = importRegex.exec(content)) !== null) {
  const varName = match[1];
  const fileRelPath = match[2];
  const fileName = fileRelPath.split('/').pop().replace(/\.[^.]+$/, '');
  imports[varName] = fileName;
}

const distFiles = fs.readdirSync('dist/assets');

function findDistAsset(baseName) {
  if (!baseName) return null;
  return distFiles.find(f => f.startsWith(baseName + '-') || f.startsWith(baseName + '.'));
}

const catalog = {};
// Match each product block
const blocks = content.split(/\{\s*id:/);
for (let i = 1; i < blocks.length; i++) {
  const block = blocks[i];
  const idMatch = block.match(/^\s*["']([^"']+)["']/);
  const nameMatch = block.match(/name:\s*["']([^"']+)["']/);
  const imgMatch = block.match(/image:\s*([a-zA-Z0-9_$]+)/);

  if (idMatch && nameMatch && imgMatch) {
    const id = idMatch[1];
    const name = nameMatch[1];
    const imgVar = imgMatch[1];
    const baseName = imports[imgVar];
    const distFile = findDistAsset(baseName);
    if (distFile) {
      catalog[id] = '/assets/' + distFile;
      catalog[name.toLowerCase().trim()] = '/assets/' + distFile;
    }
  }
}

console.log('Total catalog entries mapped:', Object.keys(catalog).length);
console.log('Sample aj-rep-005:', catalog['aj-rep-005']);
console.log('Sample Asim Jofa:', catalog['asim jofa regal pishwas replica - peach']);

fs.writeFileSync('server/data/productCatalog.json', JSON.stringify(catalog, null, 2), 'utf8');
console.log('Wrote server/data/productCatalog.json successfully!');
