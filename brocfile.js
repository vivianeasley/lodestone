var concat      = require('broccoli-concat');
var pickFiles   = require('broccoli-static-compiler');
var mergeTrees  = require('broccoli-merge-trees');
var compileLess = require('broccoli-less-single');

var libraries = concat('libraries/', {
  inputFiles: ['**/*.js'],
  outputFile: '/libraries.js'
});
var scripts = concat('js/', {
  inputFiles: ['**/initJS/app.js', '**/initJS/renderModule.js', '**/initJS/toolsModule.js', '**/*.js'],
  outputFile: '/scripts.js'
});
var appCss = compileLess(['css/'], 'main.less', '/styles.css')

var publicAssets = pickFiles('public/', {
  srcDir: '/assets',
  destDir: '/assets'
});
var publicIconFont = pickFiles('public/', {
  srcDir: '/fonts',
  destDir: '/fonts'
});
var publicFiles = pickFiles('public/', {
  srcDir: 'index.html',
  destDir: 'index.html'
});

module.exports = mergeTrees([libraries, scripts, appCss, publicAssets, publicIconFont, publicFiles]);
