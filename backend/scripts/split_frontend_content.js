const fs = require('fs');
const path = require('path');

const specPath = path.resolve(__dirname, '../../spec/FRONTEND_CONTENT_GENERATION.md');
const content = fs.readFileSync(specPath, 'utf8');

const markers = [
  { start: '# 1. HTML', id: 'f_html' },
  { start: '# 2. CSS', id: 'f_css' },
  { start: '# 3. JavaScript (ES6+)', id: 'f_js' },
  { start: '# 4. TypeScript', id: 'f_ts' },
  { start: '# 5. Git & GitHub', id: 'f_git' },
  { start: '# 6. React', id: 'f_react' },
  { start: '# 7. React Router', id: 'f_router' },
  { start: '# 8. Tailwind CSS', id: 'f_tailwind' },
  { start: '# 9. State Management', id: 'f_state' },
  { start: '# 10. API Integration', id: 'f_api' },
  { start: '# 11. Forms & Validation', id: 'f_forms' },
  { start: '# 12. Authentication', id: 'f_auth' },
  { start: '# 13. Testing', id: 'f_testing' },
  { start: '# 14. Next.js', id: 'f_nextjs' },
  { start: '# 15. Deployment', id: 'f_deploy' },
  { start: '# 1. Advanced JavaScript', id: 'f_a_js' },
  { start: '# 2. Advanced TypeScript', id: 'f_a_ts' },
  { start: '# 3. Advanced React', id: 'f_a_react' },
  { start: '# 4. Advanced State Management', id: 'f_a_state' },
  { start: '# 5. Performance Optimization', id: 'f_a_perf' },
  { start: '# 6. Advanced Next.js', id: 'f_a_nextjs' },
  { start: '# 7. Frontend Security', id: 'f_a_sec' },
  { start: '# 8. System Design for Frontend', id: 'f_a_sys' },
  { start: '# 9. Micro Frontends', id: 'f_a_micro' },
  { start: '# 10. Accessibility (a11y)', id: 'f_a_a11y' },
  { start: '# 11. Internationalization (i18n)', id: 'f_a_i18n' },
  { start: '# 12. Progressive Web Apps (PWA)', id: 'f_a_pwa' },
  { start: '# 13. Advanced Animations', id: 'f_a_anim' },
  { start: '# 14. Advanced Testing', id: 'f_a_test' },
  { start: '# 15. CI/CD for Frontend', id: 'f_a_cicd' },
  { start: '# 16. Monitoring & Analytics', id: 'f_a_mon' },
  { start: '# 17. Production Deployment', id: 'f_a_deploy' }
];

const lessonsDir = path.resolve(__dirname, '../../backend/content/lessons');
if (!fs.existsSync(lessonsDir)) {
  fs.mkdirSync(lessonsDir, { recursive: true });
}

for (let i = 0; i < markers.length; i++) {
  const current = markers[i];
  const next = markers[i + 1];

  let startIndex = content.indexOf(current.start);
  let endIndex = next ? content.indexOf(next.start, startIndex) : content.length;

  if (startIndex !== -1) {
    if (endIndex === -1) endIndex = content.length;
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
