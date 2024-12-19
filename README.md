# 易悦轻小说

易悦轻小说是一个基于 Vue.js 的移动端小说阅读应用。该应用提供了一个用户友好的界面，允许用户阅读各种类型的小说。

# ue-novel-mobile

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## 功能

- 提供多种类型的小说阅读
- 用户可以根据喜好搜索和收藏小说
- 支持夜间模式和字体调整
- 提供流畅的阅读体验

## 技术栈

- Vue.js
- Vue Router

## 安装

```bash
git clone https://github.com/your-username/your-project.git

```

```bash
拷贝 public 文件夹的后端代码运行

```

部署静态网页 后续问题及解决方案介绍
部署完毕后项目正常运转，但是在我们自己的路由页面中刷新，会导致去到404界面。解决方案如下
在项目根目录创建文件 netlify.toml 文件。（如果你最终打包后的文件里面不是index.html请你更改为你定义的名字）内容如下：
  [[redirects]]
  	  from="/*"
  	  to="/index.html"
  	  status=200
完成上面创建文件操作后提交代码进行自动化部署，然后测试即可。
