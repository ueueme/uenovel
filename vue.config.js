const { defineConfig } = require("@vue/cli-service");
const path = require("path"); // 引入 path 模块

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false, // 关闭语法检查 防止不必要的语法报错
  // assetsDir: 'static',
  // parallel: false,
  publicPath: "/",
  // publicPath: "./",
  devServer: {
    port: 2233, // 设置你想要的端口号
    host: "0.0.0.0", // 允许远程访问
    // open: true, // 自动打开浏览器
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"), // 设置 '@' 为 src 目录的别名
      },
    },
  },
});
