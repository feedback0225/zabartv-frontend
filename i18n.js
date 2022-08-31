const NextI18Next = require('next-i18next').default

module.exports = new NextI18Next({
    otherLanguages: ['ce'],
    defaultNS: 'common',
    localeSubpaths: {
        ce: 'ce'
    },
    localePath: 'public/static/locales',
})