import React from 'react';

class Counter extends React.Component {
    state = {
        counterText: 'Current Increment: '
    };

    render() {
        return (
            <div>
                <span>{this.props.counterText} </span>
            </div>
        );
    }
}

export default Counter;