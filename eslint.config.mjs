// 导入 globals 模块，用于定义全局变量
import globals from "globals";
// 导入 eslint-plugin-vue 插件，用于 Vue 项目的代码检查
import pluginVue from "eslint-plugin-vue";

/** @type {import('eslint').Linter.Config[]} */


export default [
  // 配置文件匹配规则，检查所有 js、mjs、cjs 和 vue 文件
  {files: ["**/*.{js,mjs,cjs,vue}"]},
  // 配置语言选项，定义全局变量，这里使用了 globals.browser 表示浏览器环境的全局变量
  {languageOptions: { globals: globals.browser }},
  // 引入 eslint-plugin-vue 插件的 flat/essential 配置，这是一个基本的 Vue 代码检查配置
 ...pluginVue.configs["flat/essential"],

 {
  rules: {
    "vue/multi-word-component-names": "off"  //禁用对 Vue 组件名称的检查，允许使用单个单词的组件名称
  }
}
];
