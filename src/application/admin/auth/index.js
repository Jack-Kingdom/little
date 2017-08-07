"use strict";

import React from 'react';

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
            method: 'post',
            body: data,
        })
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch((err) => console.log(err));

    }

    componentWillMount() {
        fetch('/api/auth/check-logged')
            .then((res) => res.json())
            .then((data) => console.log(data))
        ;
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Email: <input type="text" name="email" value={this.state.email} onChange={this.handleChange}/>
                    PassWord: <input type="password" name="password" value={this.state.password}
                                     onChange={this.handleChange}/>
                </label>
                <input type="submit" value="Submit" onChange={this.handleSubmit}/>
            </form>
        )
    }
}

export default Auth;