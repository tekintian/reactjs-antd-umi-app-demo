import React from "react";
import { connect } from "dva";

const nsName = "listdemo"; //这里的命名空间名称就是models中模型定义的命名空间名称
//说明： 第一个回调函数，作用 将 page层和model层进行链接，返回model中的数据，
// 并且将返回的数据绑定到 this.props 中， 后面render中使用 this.props.xx就可以访问
@connect((state) => {
  return {
    dataList: state[nsName].data,
    maxNum: state[nsName].maxNum,
  };
})
class ListDemo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <ul>
          {// 遍历值
          this.props.dataList.map((value, index) => {
            return <li key={index}>{value}</li>;
          })}
        </ul>
        <button>添加</button>
      </div>
    );
  }
}

export default ListDemo; //注意这里必须要导出，否则页面不会显示内容
