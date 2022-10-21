# ReactJs dmeo

什么是ReactJS: 就是一个用于构建用户界面的JavaScript框架，是Facebook开发的一款的JS框架。

   ReactJS把复杂的页面，拆分成一个个的组件，将这些组件一个个的拼装起来，就会呈现多样的页面。ReactJS可以用于 MVC 架构，也可以用于 MVVM 架构，或者别的架构。

## 环境安装
~~~sh
# node应用对于版本至关重要，如果是开发机器，推荐使用nvm进行node版本管理
# nvm安装教程 https://github.com/nvm-sh/nvm
# 创建nvm的工作目录
mkdir ~/.nvm
# 使用nvm安装 node 8.12.0
nvm install 8.12.0
use 8.12.0
# 首先得有 node，并确保 node 版本是 10.13 或以上。（mac 下推荐使用 nvm 来管理 node 版本）
$ node -v
v8.12.0
# 推荐使用 yarn 管理 npm 依赖，并使用国内源（阿里用户使用内网源）。
# 国内源
$ npm i yarn tyarn -g
# 后面文档里的 yarn 换成 tyarn
$ tyarn -v
# umi全局安装
# tyarn global add umi

# 进行初始化：
$ tyarn init -y
$ tyarn add umi --dev #项目中添加umi的依赖
$ umi dev #启动服务
~~~



