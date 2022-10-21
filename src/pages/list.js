import React from 'react';

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataList: [1, 2, 3, 4, 5],
            maxNum: 5
        }
    }
    shouldComponentUpdate(nextProps, nextState) {
    // 每当this.props或this.state有变化，在render方法执行之前，就会调用这个方法。
    // 该方法返回一个布尔值，表示是否应该继续执行render方法，即如果返回false，UI 就不会更新，默认返回true。
    // 组件挂载时，render方法的第一次执行，不会调用这个方法。
        console.log("shouldComponentUpdate()");
        return true;
    }
    render(){
        return (<div>
            <ul>
                {
                    this.state.dataList.map((val,index) => {
                        return <li key={index}>{ val }</li>
                    })
                }

            </ul>
            <button onClick={() => {
                let mNum = this.state.maxNum+1;
                let newArr = [...this.state.dataList, mNum];

                this.setState({
                    dataList: newArr,
                    maxNum: mNum
                })
             }}>点我</button>
        </div>);
    };
}

export default List;