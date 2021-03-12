const path = require('path')
module.exports = {
  type: 'library',
  webpack: {
    entries: "./src/index.ts",
    output: {
      library: "{{library}}", // 对外暴露出的导出对象名称
      path: path.resolve(__dirname, './dist'),
      filename: "[name].js"
    },
    plugins: []
  }
}