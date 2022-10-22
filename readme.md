# ReactJs + Ant Design + Umi app dmeo



## 命名规范

由于Umi的默认url路由为文件名，所以 pages中的建议 文件名使用小驼峰； model中根据命名空间的名称来命名



## 开始开发
~~~sh
# 注意本项目默认node v14.x, 如果安装了多个node版本，每次开头terminel需要先切换到这个版本在开始
nvm use v14.20.1
# 启动服务
yarn start
# 编译发布
yarn build
~~~




## 环境安装
~~~sh
# node应用对于版本至关重要，如果是开发机器，推荐使用nvm进行node版本管理
# nvm安装教程 https://github.com/nvm-sh/nvm
# 创建nvm的工作目录
mkdir ~/.nvm
# 使用nvm安装 node 8.12.0这个用不了，需要使用 v14.20.1
nvm install v14.20.1
nvm use v14.20.1
# 首先得有 node，并确保 node 版本是 10.13 或以上。（mac 下推荐使用 nvm 来管理 node 版本）
$ node -v
v14.20.1
# 推荐使用 yarn 管理 npm 依赖，并使用国内源（阿里用户使用内网源）。
# 国内源
$ npm i yarn tyarn -g
# 后面文档里的 yarn 换成 tyarn
$ tyarn -v
# umi全局安装
#tyarn global add umi
# 注意如果没有全局安装umi，则需要在package.json中增加启动脚本, 如下
"scripts": {
    "start": "umi dev",
    "build": "umi build"
 }


# 进行初始化：
$ tyarn init -y
$ tyarn add umi@2.2.1 --dev #项目中添加umi的依赖, 2.x的最终版本为 umi@2.13.17
#umi dev #启动服务 全局安装umi的情况下
yarn start # 使用yarn 来启动项目中安装的umi服务

# 构建
yarn build # 这里的build是在package.json文件的script中定义的
~~~

~~~sh
#添加umi-plugin-react插件, umi-plugin-react插件是umi官方基于react封装的插件，包含了13个常用的进阶功能。
#添加插件
tyarn add umi-plugin-react@1.2.0 --dev
~~~


注意为了保持和教程中的版本一致性，这里直接将版本文件放到package中，然后在执行 yarn install 安装对应的版本。
- package.json
~~~json
{
  "name": "reactjs-app",
  "version": "1.0.0",
  "main": "index.js",
  "repository": "http://github.com/tekintian",
  "author": "tekintian",
  "license": "MIT",
  "scripts": {
    "start": "umi dev",
    "build": "umi build",
    "postinstall": "umi generate tmp",
    "prettier": "prettier --write '**/*.{js,jsx,tsx,ts,less,md,json}'",
    "test": "umi-test",
    "test:coverage": "umi-test --coverage"
  },
  "dependencies": {
    "umi": "^2.2.1"
  },
  "devDependencies": {
    "umi-plugin-react": "^1.2.0"
  }
}
~~~









