import React from "react";
import HelloWorld from "../component/HelloWorld";

class Hello extends React.Component {
  constructor(props) {
    super(props);

    //状态数据
    this.state = {
      name: "Tekin",
    };
  }
  componentDidMount() {
    //===获取URL中的参数 start ====
    console.log(this.props.location.query);
    let qname = this.props.location.query.name;
    if (qname) {
      //如果参数不为空，则使用setState修改状态数据
      this.setState({
        name: qname,
      });
    }
    //====end====
  }
  render() {
    return <HelloWorld name={this.state.name}>My first react app</HelloWorld>; //使用helloworld组件
  }
}
export default Hello;
