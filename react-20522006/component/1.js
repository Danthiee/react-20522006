import * as React from "react";
import * as ReactDom from "react-dom";


class MyComponent extends React.Component {
    state = {
        first: false,
        second:true,
    };
    render() {
        const {first, second} = this.state;
        return (
            <main>
                <section>
                    <button disables={first}> First </button>
                </section>
                <section>
                    <button disabled ={second}>Second</button>
                </section>
            </main>
        )
     }
}
export default MyComponent;
