import React, { Component } from 'react';

class Btn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Foulen' // Initial name
        };
    }

    handleClick = () => {
        // Toggle name between 'Foulen' and 'Ghaith'
        this.setState(prevState => ({
            name: prevState.name === 'Foulen' ? 'Ghaith' : 'Foulen'
        }));
    }

    render() {
        const { name } = this.state;
        return (
            <div>
                {/* This is the button */}
                <button onClick={this.handleClick}>Toggle Name</button>
                <p>{name.length ? `Hello ${name}` : 'Hello There!'}</p>
            </div>
        );
    }
}

export default Btn;
