import React from 'react';

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataList: [1, 2, 3, 4, 5],
            maxNum: 5
        }
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