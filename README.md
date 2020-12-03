# Femi

## 简介

集运行时和构建时于一体的微前端脚手架

## Feature

### 独立开发、独立部署

- 每个 App 可以单独启动，单独构建
- 提供优化的 dockerfile, 一键生成 Docker 镜像

### 集成加载

- 将独立的 App 放在一个工程内进行构建打包(one box 理念: 一个运行环境可以运行起所有的应用)，并生成 docker 镜像，继而以整个镜像做灰度发布。

### 动态加载

- System.js 协议动态加载 App
- 便捷的封装 Parcel Api，以技术无关的形式加载 App 或者组件

## 快速上手

#### 安装 Femi

```
npm install femi -g
```

or

```
yarn global add femi
```

#### 初始化主工程

```
femi init myFemiProject
```

#### 进入目录，安装依赖

```
cd myFemiProject && yarn
```

#### 启动主工程开发环境

```
yarn start
```

## 主工程

### 主工程目录结构

```
  -
  |--- docker   // docker配置，可选，不用可删除
  |--- public   // 存放静态资源，此目录下的文件构建时仅复制
  |--- src
    |--- apps               // App目录
      |--- appRuntimeReact   // Runtime Demo App
      |--- appVue           // Buildin Demo App
      |--- appReact         // Buildin Demo App
    |--- common             // 公共库，所有 Buildin app 可以直接引入
    |--- components         // 公共组件
    |--- constants          // 常量
    |--- parcels            // Parcel 目录
    |--- styles             // 公共样式
    |--- types              // 公共类型
```

可以看到接入主工程分为两种 App 类型: Runtime 和 Buildin，以下会对这两种 App 进行解释，并介绍何时用那种 App

## Buildin App - 子应用

### 特点

Buildin App 是随主工程一起编译的，使用主工程统一的 femi-scripts 进行构建，这种类型的 App 具有以下特点:

- 集成度高，环境统一，复用率高
- 不灵活，需要随主工程一起发布

推荐用于主工程的公共页面，例如登陆页、首页等

### 启动某个 buildin App 的开发环境 (单独，只有这一个 app)

```
yarn start appReact
```

#### 构建某个 buildin App (单独，只有这一个 app)

```
yarn build appReact
```

## Runtime App - 子应用

Runtime App 为独立开发、独立部署的 App，当主工程匹配到相对应的路由后，通过 System.jS 加载对应 App 的静态资源，找到 App 静态资源中提供的生命周期方法来完成对应的挂载和之后的卸载。

### 创建 App

```
femi create-app <type> <name>
```

type 可选 react 和 vue

例如，我想创建一个使用 React App，名字为 Intro

```
femi create-app react Intro
```

然后在当前运行目录下就多了 Intro App 目录啦

#### React App 推荐目录

```
|--- src
  |--- common       // app 内公共库
    |--- history.ts // app 内的跳转
  |--- components   // app 内公共组件
  |--- constants    // app 内常量
  |--- routes       // app 内路由
    |-- Home        // 目录与嵌套路由结构相似
      |-- Intro Page
    |-- User
      |-- Add Page
      |-- Edit Page
  |--- stores       // 可选，app 内状态库
  |--- styles       // 可选，app 内公共样式
  |--- types        // app 内类型
  |--- index.tsx    // 根组件
|--- app.tsx        // 接入主工程的入口，提供生命周期方法
|--- index.tsx      // 单独启动 dev 环境的入口

```

#### Vue App 推荐目录

```
待补
```

### 配置主工程路由

src/app.js

```js
export default [
  ...
  {
    name: "appRuntimeReact",       // 名字, 随意取
    key: "appRuntimeReact",        // key，需要和目录名
    path: APP_PARCEL_REACT,       // 路由匹配前缀，匹配到就会分配到此 App
    domId: "app-parcel-react",    // 此 App 挂载的 dom 节点
  },
  ...
]
```

### 子应用 dev 环境

```
yarn start
```

### 子应用独立构建

```
yarn build
```

### 子应用 dev 环境中以 system.js 格式输出

```
// Parcel 为入口名称，子应用默认已经配好
// devServer输出静态资源: localhost: [端口号]/Parcel/js/main.js
yarn build Parcel --system
```

### 子应用以 system.js 格式输出

```
// 生成 dist 目录
yarn build Parcel --system
```

### 主工程接入子应用

public/index.html

```html
...
<head>
  ...
  <script type="systemjs-importmap">
    {
      "imports": {
        ...
        // 这个 key 即为 system 模块名字
        "reactApp": "http://localhost:3001/Parcel/js/main.js"
      }
    }
  </script>
</head>
<body>
  ... // 新增 dom 容器
  <div id="app-parcel-react"></div>
</body>
...
```

apps/appRuntimeReact 新建

```js
import { bootstrapFac, mountFac, unmountFac } from "@common/appFac"

const bootstrap = bootstrapFac(() => {})

const mount = mountFac((props) => {
  System.import("reactApp").then((res: any) => {
    res.mount(props)
  })
})

const unmount = unmountFac((props) => {
  System.import("reactApp").then((res: any) => {
    res.unmount(props)
  })
})

export { bootstrap, mount, unmount }
```

## femi.json 的配置项解释

在项目根目录中添加，主要用于指定入口和提供一些个性化配置

### entry - 入口

```json
/* 主工程 */
{
  "entry": {
    "Main": "src/single-spa.config.js",     // 工程入口
    "React": "src/apps/appReact/index.tsx", // Buildin App 的 dev 环境入口
  },
  ...
}

```

```json
/* 子工程 */
{
  "entry": {
    "Main": "./src/dev.tsx", // 工程入口
    "Parcel": "./src/parcel.tsx" // Parcel入口
  }
}
```

### output - 出口

```json
{
  "output": {
    "hash": false           // 非必填，输出文件是否带 hash
  }
  ...
}
```

### useTs - 是否使用 ts

```json
{
  "useTs: false             // 非必填，默认为 true
  ...
}
```

### port - 开发环境端口

```json
{
  "port": 3001 // 非必填，指定开发环境端口
}
```

### proxy - 开发环境代理

```json
{
  ...,
  "proxy": {
    "/api": {
      "target": "http://xxxxx.com/",
      "changeOrigin": true
    }
  },
  ...
}
```

### externals - 构建排除项

```json
{
  ...,
  "externals": ["vue", "vue-router"]
  ...
}
```

## Parcel 使用

待补

## Commitlint

目前只在主工程中默认开启

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

## Docker

大名鼎鼎的 docker 带来的好处自然无需赘述，以 docker 封装，前端可以作为一个服务进行发布，并且隔离外部运行环境。在做版本回滚时非常方便，只需要以安全的镜像起一个容器，保住研发的最后一条生命线。配合容器的概念，通过控制流量导向，可以实现灰度发布。

### 安装 docker

#### mac

```
brew install docker
```

#### hello world

```
docker run hello-world
```

#### 搜索镜像

```
docker search nginx
```

#### 下载镜像

```
docker pull nginx
```

#### 展示所有的镜像

```
docker images
```

#### 通过 dockerfile 构建镜像

- -t 指定镜像名
- -f 指定 dockerfile 路径

```
docker build ./ -f ./path/to/dockerfile -t yourImageName
```

#### 使用镜像  运行容器

```
docker run -p 80:80 -it ImageName /bin/sh
```

#### 连接到正在运行的容器

```
docker attach --sig-proxy=false ContainerNameOrId
```

```
docker exec -it ContainerNameOrId /bin/bash
```

### Dockerfile 详解

#### FROM: 指定基础镜像

```
FROM <image>
FROM <image>:<tag>
FROM <image>:<digest>
```

#### RUN: 运行指定的命令

```
RUN <command>
```

#### COPY: 复制命令

```
COPY <src>... <dest>
```

\*src 为本地文件

[docker 命令大全](http://www.runoob.com/docker/docker-command-manual.html)

[dockerfile 命令大全](https://www.cnblogs.com/dazhoushuoceshi/p/7066041.html)
