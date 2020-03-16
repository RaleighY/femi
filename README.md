# Raly-Mirco-Frontend

## 简介

构建型微前端:

开发时，允许以子应用为维度拆分，进行各自的独立开发。

发布时，将独立的子应用放在一个工程内进行构建打包(one box 理念: 一个运行环境可以运行起所有的应用)，并生成 docker 镜像，继而以整个镜像做灰度发布。

微前端解决不了技术性问题，更多的是梳理代码组织结构。

## 架构

### 技术栈

- Lang: TypeScript

- 路由分发: single-spa

- React 能力:

  - react + react-dom
  - react-router
  - react-async
  - react-async-devtools
  - react-helmet
  - mobx-react

- Vue 能力: Todo

- Angular 能力: Todo

- 状态管理: Mobx

- 样式: Styled-Components 、normalize.css

- Http: Axios

- Lint: eslint, commitlint

- 工具: prettier, husky

- 其他库: moment, numeral

### 快速上手

#### 安装 femi

```
npm install femi -g
```

or

```
yarn global add femi
```

#### 初始化项目

```
femi init myFemiProject
```

#### 进入目录

```
cd myFemiProject && yarn
```

#### 构建

```
yarn build
```

#### 单独构建一个 App

```
yarn build report
```

### 目录结构

```
  -
  |--- config   // webpack配置，后续会删除，以npm方式引入
  |--- docker   // docker配置
  |--- public   // 存放静态资源，此目录下的文件构件时仅复制
  |--- scripts  // npm scripts，后续会删除，以npm方式引入
  |--- src
    |--- apps   // app目录
      |--- app1
      |--- app2
        |--- src
          |--- common       // app内公共库
            |--- history.ts // app内的跳转
          |--- components   // app内公共组件
          |--- constants    // app内常量
          |--- routes       // app内路由
          |--- stores       // 可选，app内状态库
          |--- styles       // 可选，app内公共样式
          |--- types        // 可选，app内公共类型
          |--- index.tsx    // app入口
        |--- app.tsx        // 与single-spa对接，注册App
    |--- common           // 项目内公共库
    |--- components       // 项目内公共组件
    |--- constants        // 项目内常量
    |--- stores           // 项目内状态库
    |--- styles           // 项目内公共样式
    |--- types            // 项目内公共类型
```

## Flow

### 创建 App

```
femi create-app <type> <name>
```

例如，我想创建一个使用 React 的 App，名字为 Intro

```
femi create-app react Intro
```

然后在 src/apps 目录下就自动根据 React 的 App 模板创建好 Intro 目录啦

<Font color="#d03">目前暂时只支持 React 类型的 App，后续会添加 Vue</Font>

### Commitlint

规范

```
git commit -m '\<type\>(\<scope\>): \<message\>.'
```

```
git commit -m '\<type\>(\<scope\>): \<message\>. \<type2\>(\<scope2\>): \<message2\>.'
```

示例

```
git commit -m 'fix(scale): fix something.'
```

- type

  ```
    feat      功能
    fix       修复
    docs      文档
    build     构建
    style     样式
    refactor  重构
    test      测试
    chore     构建、工具
    revert    回退
    ci
  ```

- scope: 作用范围

- message: 描述,必须以英文句号.结尾

### ESLint

[ESLint Rules](https://eslint.org/docs/rules/)

[ESLint React 规则](https://github.com/yannickcr/eslint-plugin-react)

如何配合 TypeScript: [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint#how-do-i-configure-my-project-to-use-typescript-eslint)

覆盖冲突规则: [plugin:@typescript-eslint/recommended](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin)

### Docker

大名鼎鼎的 docker 带来的好处自然无需赘述，以 docker 封装，前端可以作为一个服务进行发布，并且隔离外部运行环境。特别在做版本回滚时非常方便，只需要以安全的镜像起一个容器，保住研发的最后一条生命线。
