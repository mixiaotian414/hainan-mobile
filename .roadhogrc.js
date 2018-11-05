const path = require('path')
/*?roadhogrc??SVG????*/
const svgSpriteDirs = [

  require.resolve('antd-mobile').replace(/warn\.js$/, ''),
  path.resolve(__dirname, 'src/assets/svg')
]


export default{
  entry: "src/index.js",
   theme: "./theme.config.js",
 /* svgSpriteLoaderDirs: svgSpriteDirs,*/
  extraBabelPlugins: [
    "transform-decorators-legacy",
    "transform-runtime",
    ["import", { "libraryName": "antd-mobile", "libraryDirectory": "es", "style": true }]
  ],
  env: {
    development: {
      extraBabelPlugins: [
        "dva-hmr"
      ]
    },
    production: {
      extraBabelPlugins: []
    }
  }
}
