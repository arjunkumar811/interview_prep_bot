const fs = require('fs');
const missing = JSON.parse(fs.readFileSync('scripts/missing_quizzes.json'));
const updated = missing.filter(id => !['f_testing', 'f_nextjs', 'f_deploy', 'f_a_js'].includes(id));
fs.writeFileSync('scripts/missing_quizzes.json', JSON.stringify(updated, null, 2));
console.log('Remaining: ' + updated.length);
