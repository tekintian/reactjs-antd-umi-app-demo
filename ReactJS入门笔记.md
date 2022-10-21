# ReactJS 框架 入门

官网： https://reactjs.org/

官方一句很简单的话，道出了什么是ReactJS，就是，一个用于构建用户界面的JavaScript框架，是Facebook开发的

一款的JS框架。

ReactJS把复杂的页面，拆分成一个个的组件，将这些组件一个个的拼装起来，就会呈现多样的页面。ReactJS可以用

于 MVC 架构，也可以用于 MVVM 架构，或者别的架构。

~~~js
环境准备
首先得有 node，并确保 node 版本是 10.13 或以上。（mac 下推荐使用 nvm 来管理 node 版本）

~~~

## React快速入门

### JSX语法
JSX语法就是，可以在js文件中插入html片段，是React自创的一种语法。
JSX语法会被Babel等转码工具进行转码，得到正常的js代码再执行。
使用JSX语法，需要2点注意：
1. 所有的html标签必须是闭合的，如： <div>hello</div>
2. 在JSX语法中，只能有一个根标签；
如果想要在html标签中插入js脚本，需要通过{}插入js脚本。
如： 
~~~js
function greeting(name){
	if(name){
		return <h1>Hello {name}</h1>;
	}
	return <h1>hello anno!</h1>
}

export default () => {
	return <div>{greeting('Tekin')}</div>;
}
~~~

### 组件
组件是React中最重要也是最核心的概念，一个网页，可以被拆分成一个个的组件：

- 在React中，这样定义一个组件：

~~~js
import React from 'react'; //第一步，导入React
class HelloWorld extends React.Component { //第二步，编写类并且继承 React.Component
render(){ //第三步，重写render()方法，用于渲染页面
return <div>hello world!</div> //JSX语法
}
}
export default HelloWorld; //第四步，导出该类
~~~

- 导入自定义组件

创建Show.js文件，用于测试导入组件：

~~~js
import React from 'react'
import HelloWorld from './HelloWorld' //导入HelloWorld组件
class Show extends React.Component{
render(){
return <HelloWorld/>; //使用HelloWorld组件
}
}
export default Show;
~~~

####组件参数

组件是可以传递参数的，有2种方式传递，分别是属性和标签包裹的内容传递，具体使用如下：

~~~js
import React from 'react'
import HelloWorld from './HelloWorld' //导入HelloWorld组件
class Show extends React.Component{
  render(){
  	return <HelloWorld name="zhangsan">shanghai</HelloWorld>; //使用HelloWorld组件
  }
}
export default Show;
~~~

其中，name="zhangsan"就是属性传递，shanghai就是标签包裹的内容传递。

那么，在HelloWord.js组件中如何接收参数呢？

对应的也是2种方法：

**属性：this.props.name 接收；**

**标签内容：this.props.children 接收；**

使用如下：

~~~js
import React from 'react'; //第一步，导入React
class HelloWorld extends React.Component { //第二步，编写类并且继承 React.Component
  render(){ //第三步，编写render()方法，用于渲染页面
  return <div>hello world! name={this.props.name}, address={this.props.children}</div> //JSX语法
  }
}
export default HelloWorld; //第四步，导出该类
~~~

#### 组件的状态

每一个组件都有一个状态，其保存在this.state中，当状态值发生变化时，React框架会自动调用render()方法，重新

渲染页面。

其中，要注意两点：

一： this.state值的设置要在构造参数中完成；

二：要修改this.state的值，需要调用this.setState()完成，不能直接对this.state进行修改；

下面通过一个案例进行演示，这个案例将实现：通过点击按钮，不断的更新this.state，从而反应到页面中。

~~~js
import React from 'react'
class List extends React.Component{
constructor(props){ // 构造参数中必须要props参数
super(props); // 调用父类的构造方法
this.state = { // 初始化this.state
dataList : [1,2,3],
maxNum : 3
};
}
render(){
return (
<div>
<ul>
{
// 遍历值
this.state.dataList.map((value,index) => {
return <li key={index}>{value}</li>
})
}
</ul>
<button
onClick={()=>{ //为按钮添加点击事件
let maxNum = this.state.maxNum + 1;
let list = [...this.state.dataList, maxNum];
this.setState({ //更新状态值
dataList : list,
maxNum : maxNum
});
}}>添加</button>
</div>
);
}
}
export default List;
~~~



####生命周期

组件的运行过程中，存在不同的阶段。React 为这些阶段提供了钩子方法，允许开发者自定义每个阶段自动执行的函

数。这些方法统称为生命周期方法（lifecycle methods）。

![lifecycle](./docs/lifecycle.jpg)



生命周期示例：

~~~js
import React from 'react'; //第一步，导入React
class LifeCycle extends React.Component {
constructor(props) {super(props);
//构造方法
console.log("constructor()");
}
componentDidMount() {
//组件挂载后调用
console.log("componentDidMount()");
}
componentWillUnmount() {
//在组件从 DOM 中移除之前立刻被调用。
console.log("componentWillUnmount()");
}
componentDidUpdate() {
//在组件完成更新后立即调用。在初始化时不会被调用。
console.log("componentDidUpdate()");
}
shouldComponentUpdate(nextProps, nextState){
// 每当this.props或this.state有变化，在render方法执行之前，就会调用这个方法。
// 该方法返回一个布尔值，表示是否应该继续执行render方法，即如果返回false，UI 就不会更新，
默认返回true。
// 组件挂载时，render方法的第一次执行，不会调用这个方法。
console.log("shouldComponentUpdate()");
}
render() {
return (
<div>
<h1>React Life Cycle!</h1>
</div>
);
}
}
export default LifeCycle;
~~~

