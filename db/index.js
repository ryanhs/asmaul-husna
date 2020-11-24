
const locales = {
  en: require('./en')
};

module.exports = {


  getItem: (index, locale = 'en') => {
    return { index, ...locales[locale][index - 1] };
  },

  getRandomIndex: () => (Math.floor(Math.random() * 100) % 99) + 1,
  getRandom: (locale) => module.exports.getItem(module.exports.getRandomIndex(), locale),
}
