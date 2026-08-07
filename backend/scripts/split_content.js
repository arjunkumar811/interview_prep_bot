const fs = require('fs');
const path = require('path');

const specPath = path.resolve(__dirname, '../../spec/BACKEND_CONTENT_GENERATION.md.md');
const content = fs.readFileSync(specPath, 'utf8');

const markers = [
  { start: '3.Rest API', id: 'b_rest' },
  { start: '4.Authentication', id: 'b_auth' },
  { start: '5.Database', id: 'b_dbs' },
  { start: '6.mongo DB', id: 'b_mongo' },
  { start: '7.postgreSQL', id: 'b_postgres' }
];

const lessonsDir = path.resolve(__dirname, '../../backend/content/lessons');
if (!fs.existsSync(lessonsDir)) {
  fs.mkdirSync(lessonsDir, { recursive: true });
}

for (let i = 0; i < markers.length; i++) {
  const current = markers[i];
  const next = markers[i + 1];

  let startIndex = content.indexOf(current.start);
  let endIndex = next ? content.indexOf(next.start) : content.length;

  if (startIndex !== -1) {
    let section = content.substring(startIndex, endIndex);
    
    // Remove the very first line (e.g. "3.Rest API's : Perfect...") to clean it up
    const lines = section.split('\n');
    lines.shift(); 
    section = lines.join('\n').trim();

    const outPath = path.join(lessonsDir, `${current.id}.md`);
    fs.writeFileSync(outPath, section);
    console.log(`Created ${outPath}`);
  } else {
    console.log(`Could not find marker for ${current.id}`);
  }
}
