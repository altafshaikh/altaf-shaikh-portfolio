const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

module.exports = (phase, { defaultConfig }) => {
  return withPWA({
    images: {
      domains: [
        "altafshaikh.github.io",
        "altafshaikh.ml"
      ],
    },
    pwa: {
      dest: 'public',
      runtimeCaching,
    },
  })
};
