import React from 'react';

class Counter extends React.Component {
    render() {
        return (
            <div>
                <span>{this.props.counterText} </span>
            </div>
        );
    }
}

export default Counter;