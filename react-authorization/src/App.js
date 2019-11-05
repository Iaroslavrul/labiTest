import React, {Component} from 'react';
import './App.css';

class AuthForm extends Component {
    state = {
        username: "",
        password: "",
        passwordVisibility: false
    };

    sendListenData = event => {
        event.preventDefault();
        // this.props.dispatch(sendData(this.state))
        // fetch()
    };

    renderInputValue = ({target: {name, value}}) => this.setState({[name]: value});

    render() {
        console.log(this.state);
        return (
            <form onSubmit={this.sendListenData}>
                <input
                    name='username'
                    onChange={this.renderInputValue}
                    type="text"
                    value={this.state.username}
                />
                <input
                    name='password'
                    onChange={this.renderInputValue}
                    type="password"
                    value={this.state.password}
                />
                <button type='submit'>Sing In</button>
            </form>
        )
    }
}

export default AuthForm;

