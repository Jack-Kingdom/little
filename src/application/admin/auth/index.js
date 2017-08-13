"use strict";

import React from 'react';
import Button from 'material-ui/Button';


class Auth extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name]: value});
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = JSON.stringify(this.state);
        fetch('/api/auth/login', {
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'same-origin',
            method: 'post',
            body: data,
        })
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch((err) => console.log(err));

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Email: <input type="text" name="email" value={this.state.email}
                                  onChange={(e) => this.setState({email: e.target.value})}/>
                    PassWord: <input type="password" name="password" value={this.state.password}
                                     onChange={(e) => this.setState({password: e.target.value})}/>
                </label>
                <input type="submit" value="Submit" onChange={this.handleSubmit}/>
                <Button>hello world</Button>
            </form>
        );
    }
}

export default Auth;