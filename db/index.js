
const locales = {
  en: require('./en')
};

module.exports = {
  getRandomIndex: () => Math.floor(Math.random() * 100),

  random: (locale = 'en') => {
    const index = module.exports.getRandomIndex();
    return locales[locale][index];
  }
}
