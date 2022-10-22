import React from "react";
import { connect } from "dva";

const nsName = "demolist"; //这里的命名空间名称就是models中模型定义的命名空间名称
//说明： 第一个回调函数，作用 将 page层和model层进行链接，返回model中的数据，
// 并且将返回的数据绑定到 this.props 中， 后面render中使用 this.props.xx就可以访问
// 第二个回调函数(可选)，这个函数的作用是将定义的函数绑定到this.props中； 调用model中定义的函数。
@connect(
  //第一个回调函数
  (state) => {
    return {
      dataList: state[nsName].data,
      maxNum: state[nsName].maxNum,
    };
  },
  //第二个回调函数
  (dispatch) => {
    return {
      //将返回的函数绑定到 this.props中
      add: function() {
        dispatch({
          //通过dispatch方法中的 type属性 指定model中定义的 命名空间/函数名 称即可调用model中定义的函数
          type: nsName + "/addNewData",
        });
      },
      initDb: () => {
        dispatch({ type: nsName + "/asyncInitData" });
      },
    };
  }
)
class DemoList extends React.Component {
  constructor(props) {
    super(props);
  }
  //在页面加载完时执行
  componentDidMount() {
    this.props.initDb(); // 调用上面connect第二个参数绑定的函数
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
        <button onClick={() => this.props.add()}>添加</button>
      </div>
    );
  }
}

export default DemoList; //注意这里必须要导出，否则页面不会显示内容
