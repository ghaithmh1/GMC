import React from 'react';

class Btn3 extends React.Component {
    state = {
        name: "amina",
        renderCount: 0 // Initialize the counter in the state
    };

    handleClick = () => {
        this.setState({ name: 'arya' });
    };

    componentDidUpdate(prevProps, prevState) {
        // Only update the renderCount if the name has changed or some other state has changed
        if (prevState.renderCount === this.state.renderCount) {
            this.setState((prevState) => ({
                renderCount: prevState.renderCount + 1
            }));
        }
    }

    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                <button onClick={this.handleClick}>Click Me</button>
                <h2>Rendered {this.state.renderCount} times</h2>
            </div>
        );
    }
}

export default Btn3;
