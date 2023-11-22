import * as React from "react";

class MyButoon extends React.Component {
    render() {
        return <button>{this.props.children}</button>;
    }
}
export default MyButoon;