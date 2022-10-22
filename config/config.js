//导出一个对象，暂时设置为空对象，后面再填充内容
export default {
  plugins: [
    [
      "umi-plugin-react",
      {
        dva: true, //开启dva
        antd: true, // 开启Ant Design功能
      },
    ],
  ],
  //下面为手动配置路由，如果不配置，则使用umi官方的自动路由配置
  // routes: [
  //   {
  //     path: "/",
  //     component: "../layouts", //配置布局路由
  //     routes: [
  //       //在这里进行配置子页面
  //       {
  //         path: "/antd/tabsDemo",
  //         component: "./antd/tabsDemo",
  //       },
  //     ],
  //   },
  // ],
};
