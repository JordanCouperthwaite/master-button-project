import React from 'react';
import Button from 'react-bootstrap/Button';
import Counter from '../components/counter/counter.js'

class Home extends React.Component {
    state = {
        counterText: 'Current Counter: Loading...'
    }

    //Calls the counter api endpoint and updates the Counter on the view with the latest value
    getCounter = () => {
        const counterUrl = 'https://master-button.herokuapp.com/counter';
    
        const requestMetadata = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            body: null
        };
    
        fetch(counterUrl, requestMetadata)
            .then(response => response.json())
            .then(responseData => {
                console.log(responseData);
                const oldState = { ...this.state };
                oldState.counterText = 'Current Counter: ' + responseData.data;
                this.setState(oldState);
            });
    };
    
    //Handles the click on the Main button which increments the value by POSTing to the api,
    //then updates the value after the server responds with the latest value
    clickHandler = () => {
        const counterUrl = 'https://master-button.herokuapp.com/counter';

        const requestMetadata = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: null
        };

        fetch(counterUrl, requestMetadata)
            .then(response => response.json())
            .then(responseData => {
                console.log(responseData);
                const oldState = { ...this.state };
                oldState.counterText = 'Current Counter: ' + responseData.data;
                this.setState(oldState);
            });
    }

    //used to run code/functions after rendering
    componentDidMount() {
        this.getCounter();
    };

    render () {
        return (
            <div>
                <Button onClick={this.clickHandler} variant="primary">Press Me</Button>
                <Counter counterText={this.state.counterText} />
            </div>
        );
    }
}

export default Home;