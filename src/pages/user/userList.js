import React from "react";
import { connect } from "dva";
import { Table, Divider, Tag, Pagination } from "antd";
const { Column } = Table;
const namespace = "userlist";
@connect(
  (state) => {
    return {
      data: state[namespace].list,
    };
  },
  (dispatch) => {
    return {
      // 将initDao函数绑定到this.props中
      initDao: () => {
        dispatch({
          //调用model中的initData函数
          type: namespace + "/initData",
        });
      },
      //这里如果有多个函数需要注入到 this.props中，可以继续写
    };
  }
)
class UserList extends React.Component {
  //在页面初始化完成时调用
  componentDidMount() {
    this.props.initDao();
  }
  render() {
    return (
      <div>
        <Table
          dataSource={this.props.data}
          pagination={{
            position: "bottom",
            total: 500,
            pageSize: 10,
            defaultCurrent: 3,
          }}
        >
          <Column title="姓名" dataIndex="name" key="name" />
          <Column title="年龄" dataIndex="age" key="age" />
          <Column title="地址" dataIndex="address" key="address" />
          <Column
            title="标签"
            dataIndex="tags"
            key="tags"
            render={(tags) => (
              <span>
                {tags.map((tag) => (
                  <Tag color="blue" key={tag}>
                    {tag}
                  </Tag>
                ))}
              </span>
            )}
          />
          <Column
            title="操作"
            key="action"
            render={(text, record) => (
              <span>
                <a href="#!">编辑</a>
                <Divider type="vertical" />
                <a href="#!">删除</a>
              </span>
            )}
          />
        </Table>
      </div>
    );
  }
}
export default UserList;
