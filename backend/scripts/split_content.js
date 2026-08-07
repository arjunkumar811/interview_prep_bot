const fs = require('fs');
const path = require('path');

const specPath = path.resolve(__dirname, '../../spec/BACKEND_CONTENT_GENERATION.md.md');
const content = fs.readFileSync(specPath, 'utf8');

const markers = [
  { start: '8.prisma ORM :', id: 'b_prisma' },
  { start: '9.redis :', id: 'b_redis' },
  { start: '10.message queues :', id: 'b_mq' },
  { start: '11.websockets :', id: 'b_ws' },
  { start: '12.file storage :', id: 'b_fs' },
  { start: '13.docker :', id: 'b_docker' },
  { start: '14.ci/cd :', id: 'b_cicd' },
  { start: '15.scaling :', id: 'b_scaling' },
  { start: '16.deployment :', id: 'b_deployment' },
  { start: '17.zod :', id: 'b_zod' },
  { start: '18.monorepos :', id: 'b_monorepo' }
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
    
    // Remove the very first line which contains the marker
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
