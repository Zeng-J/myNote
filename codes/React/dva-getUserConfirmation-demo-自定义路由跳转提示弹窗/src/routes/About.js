import React from "react";
import { connect } from "dva";
import { Button } from "antd";

class About extends React.Component{
    constructor(props) {
        super(props);
        window.aboutPage = this;
        this.state = {
            sorting: this.props.example.sorting
        }
    }

    componentWillReceiveProps(nextPops) {
        if (nextPops.example.sorting !== this.state.sorting) {
            this.setState({
                sorting: nextPops.example.sorting
            })
        }
    }

    handleSort = () => {
        this.setState({
            sorting: !this.state.sorting
        }, () => {  
            this.props.dispatch({
                type: "example/handleChangeSort",
                payload: {
                    sorting: this.state.sorting
                }
            })
        })
    }
    render() {
        return (
            <div>
                <h3>排序中（this.state.sorting）：{this.state.sorting ? "是" : "否"}</h3>
                <h3>model数据（this.props.example.sorting）：{this.props.example.sorting ? "是" : "否"}</h3>
                <p>
                    这是用来测试自定义路由跳转提示框的
                </p>
                <Button onClick={this.handleSort}>排序</Button>
            </div>
        )
    }
}

export default connect(({ example }) => ({ example }))(About);