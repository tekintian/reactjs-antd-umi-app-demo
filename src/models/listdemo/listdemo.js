import request from "../../util/request";

export default {
  namespace: "listdemo",
  //数据状态初始化
  state: {
    data: [],
    maxNum: 0,
  },
  reducers: {
    //定义一些函数
    addNewData: function(state, resp) {
      //这里的第二个参数为put方法传递过来的异步请求的返回对象
      // 如果resp中存在data数据，直接返回，在做初始化操作
      if (resp.data) {
        return resp.data;
      }

      //这里的state是更新之前的数据
      let maxNum = state.maxNum + 1;
      // 使用扩展运算符扩展原来的数据state.data，然后在加上新的maxNum 后合并为新数组
      let newArr = [...state.data, maxNum];

      //直接直接返回后pages页面就会更新数据，注意这里的对象名称 要和上面的state中保持一致。
      return {
        data: newArr,
        maxNum: maxNum,
      };
    },
  },
  effects: {
    // effects用户加载异步数据
    //注意这里的* 表示的是当前函数是一个generator， 即可用执行异步调用的函数
    *asyncInitData(params, sagaEffects) {
      const { call, put } = sagaEffects; //使用解构从sagaEffects中获取 call，put 方法
      const url = "/ds/list"; //定义请求URL
      let resp = yield call(request, url); //执行请求

      yield put({
        // 调用reducers中的方法
        type: "addNewData", //指定方法名
        data: resp, //传递异步加载来的数据
      });
    },
  },
};
