const fs = require('fs');

let fileContent = fs.readFileSync('src/data/blogs.js', 'utf8');

// Replace any stray unescaped backtick words inside template literals
fileContent = fileContent
  .split('`h2`').join('"H2"')
  .split('`h3`').join('"H3"')
  .split('`Product`').join('"Product"')
  .split('`BreadcrumbList`').join('"BreadcrumbList"')
  .split('`BlogPosting`').join('"BlogPosting"');

fs.writeFileSync('src/data/blogs.js', fileContent, 'utf8');
console.log('blogs.js cleaned successfully!');
