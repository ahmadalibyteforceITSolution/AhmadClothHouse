const { execSync } = require('child_process');

console.log('=== Step 1: Generating Production Sitemap ===');
require('./generate-sitemap.cjs');

console.log('\n=== Step 2: Building Vite Production Bundle ===');
execSync('node node_modules/vite/bin/vite.js build', { stdio: 'inherit' });
console.log('\n=== Build Complete: Deployment Ready ===');
