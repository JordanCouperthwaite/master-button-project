import React from 'react';
import styles from './MyButton.module.css';

class MyButton extends React.Component {
    state = {
        buttonText: 'big poop'
    }

    clickHandler = () => {
        console.log('hi');
        const oldState = { ...this.state };
        oldState.buttonText = 'Even bigger poop';
        this.setState(oldState);
    }

    render () {
        const myvariable = 'poop';
        return (
            <div>
                <button onClick={this.props.click} className={styles.MyButton} variant="primary">{myvariable}</button>
                <button onClick={this.clickHandler} variant="primary">{this.state.buttonText}</button>
                {this.props.greetings}
            </div>
        );
    }
}

export default MyButton;