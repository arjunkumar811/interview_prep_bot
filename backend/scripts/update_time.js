const fs = require('fs');
const path = require('path');
const file = path.resolve(__dirname, '../../backend/src/constants/roadmap.constants.ts');
let content = fs.readFileSync(file, 'utf8');
content = content.replace(/estimatedTime:\s*'[a-zA-Z0-9\s\-]+'/g, "estimatedTime: '10-15 min'");
fs.writeFileSync(file, content);
console.log('Updated roadmap.constants.ts');
