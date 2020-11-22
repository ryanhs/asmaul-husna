const chalk = require('chalk');
const wordwrap = require('wordwrapjs');
const indent = require('indent-string');

const db = require('./en').filter(v => !!v.arabic);

const c = db.length;
const lastNItems = 5;
const wordwrapWidth = 50;

db.forEach((item, i) => {
  if (i < c - lastNItems) return;

  console.log(`${i + 1}. - ${chalk.blue(item.arabic)} (${chalk.grey(item.latin)})`);
  console.log(`     transliteration: ${chalk.grey(item.transliteration)}`)
  const meaning = wordwrap.wrap(
    `meaning:\n${chalk.grey(item.meaning)}`,
    { width: wordwrapWidth }
  );
  console.log(indent(meaning, 5))
  console.log();
});
