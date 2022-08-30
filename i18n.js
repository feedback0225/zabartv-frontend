const NextI18Next = require('next-i18next').default

module.exports = new NextI18Next({
    otherLanguages: ['be'],
    defaultNS: 'common',
    localeSubpaths: {
        be: 'be'
    },
    localePath: 'public/static/locales',
})