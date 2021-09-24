import { Component } from 'react'
class Speedometer extends Component {
    state = { count: 0 };
    onIncrement = () => {
        this.setState(prevState => ({ count: prevState.count + 10 }));
    };
    onDecrement = () => {
        this.setState(prevState => ({ count: prevState.count - 10 }));
    };
    render() {
        const { count } = this.state;
        return (<div>
            <h1>SPEEDOMETER</h1>
            <img />
        </div>);
    }
}
