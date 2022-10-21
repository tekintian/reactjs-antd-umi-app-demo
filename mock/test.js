export default {
  //模拟请求返回数据
  "get /mk/test": function(req, res) {
    res.json({
      data: [1, 2, 3, 4],
      maxNum: 4,
    });
  },
};
