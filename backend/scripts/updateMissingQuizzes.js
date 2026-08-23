const fs = require('fs');
const missing = JSON.parse(fs.readFileSync('scripts/missing_quizzes.json'));
const updated = missing.filter(id => !['f_a_a11y', 'f_a_i18n', 'f_a_pwa', 'f_a_anim'].includes(id));
fs.writeFileSync('scripts/missing_quizzes.json', JSON.stringify(updated, null, 2));
console.log('Remaining: ' + updated.length);
