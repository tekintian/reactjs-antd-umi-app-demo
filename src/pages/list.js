import React from "react";
import { connect } from "dva";
const namespace = "list";
const mapStateToProps = (state) => {
  const listData = state[namespace].data;
  const maxNum = state[namespace].maxNum;
  return {
    listData,
    maxNum,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addNewData: () => {
      dispatch({
        type: namespace + "/addNewData",
      });
    },
    initData: () => {
      //新增初始化方法的定义
      dispatch({
        type: namespace + "/initData",
      });
    },
  };
};
@connect(mapStateToProps, mapDispatchToProps)
class List extends React.Component {
  componentDidMount() {
    this.props.initData(); //组件加载完后进行初始化操作
  }
  render() {
    return (
      <div>
        <ul>
          {// 遍历值
          this.props.listData.map((value, index) => {
            return <li key={index}>{value}</li>;
          })}
        </ul>
        <button
          onClick={() => {
            this.props.addNewData();
          }}
        >
          添加
        </button>
      </div>
    );
  }
}
export default List;
