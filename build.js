const connectAssets = require('connect-assets'),
fs                  = require('fs');

const assets = connectAssets({
  paths: [
      `${__dirname}/src/javascripts`,
      `${__dirname}/src/stylesheets`
  ],
  build: true,
  sourceMaps: false,
  buildDir: './dist',
});

assets.compile(function(){
  fs.readFile(`${__dirname}/dist/manifest.json`, 'utf-8', (err, data) => {
    if(err){
      console.log(err);
      return
    }
    var manifest = JSON.parse(data);
    var assets   = manifest.assets;
    var path     = `${__dirname}/dist`;
    fs.rename(`${path}/${assets['admin.js']}`, `${path}/swagger-admin.js`)
    fs.rename(`${path}/${assets['admin.css']}`, `${path}/swagger-admin.css`)
  })
})