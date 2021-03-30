const fs = require('fs'); 
const path = require('path');

fs.writeFileSync(path.join(process.cwd(), 'build/404.html'), '<h1>404 not found</h1>');