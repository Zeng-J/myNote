import React from "react";
import { connect } from "dva";

class About extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>主页</h1>
            </div>
        )
    }
}

export default connect(({ example }) => ({ example }))(About);