const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

module.exports = (phase, { defaultConfig }) => {
  return withPWA({
    images: {
      domains: [
        "altafshaikh.github.io",
      ],
    },
    pwa: {
      dest: 'public',
      runtimeCaching,
    },
  })
};
