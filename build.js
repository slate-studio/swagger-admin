const connectAssets = require('connect-assets')

const assets = connectAssets({
    paths: [
        `${__dirname}/src/javascripts`,
        `${__dirname}/src/stylesheets`
    ],
    build: true,
    sourceMaps: false,
    buildDir: './dist',
    fingerprinting: false
    });