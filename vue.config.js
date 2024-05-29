module.exports = {
  configureWebpack: {
    stats: {
      // Customize as per your need
      all: false,
      errors: true,
      warnings: true,
      timings: true,

      // Enable additional logging
      builtAt: true,
      assets: true,
      chunks: true,
      modules: true,
      children: true,
    },
  },
}
