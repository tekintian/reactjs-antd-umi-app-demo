export default {
  namespace: "listdemo",
  state: {
    data: [8, 9, 3, 2, 1],
    maxNum: 0,
  },
  reducers: {
    //定义一些函数
    addNewData: function(state) {
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
};
