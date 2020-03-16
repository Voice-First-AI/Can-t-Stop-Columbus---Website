import React, { Component } from 'react';
import firebase from './config';

import Home from '../Home/Home';
import Landing from '../Landing/Landing';

export class AuthListener extends Component {
    constructor() {
        super();
        this.state = {
            user: null
        }
    }

    componentDidMount() {
        this.authListener();
    }

    authListener() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ user });
            } else {
                this.setState({ user: null })
            }
        })
    }

    render() {
        return (
            <div>
                {this.state.user ? (<Home />) : (<Landing />)}
            </div>
        )
    }
}

export default AuthListener;
