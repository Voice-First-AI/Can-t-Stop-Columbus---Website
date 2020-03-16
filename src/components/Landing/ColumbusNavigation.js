import React, { Component } from 'react';
import {Navigation} from 'react-mdl';
import firebase from '../Firebase/config';

export class ColumbusNavigation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            signedIn: false
        }
    }
    
    componentDidMount() {
        const currentComponent = this;
        //Retrieve ARTIST NAME from Firebase
        firebase.auth().onAuthStateChanged(function(user) {
            currentComponent.setState({
                signedIn: (user ? true : false)
            })
        });
    }

    onSignout = (e) => {
        e.preventDefault();
        firebase.auth().signOut();
    }
    
    render() {
        return (
            <div>
                <Navigation>
                    <a href="https://coronavirus.ohio.gov/wps/portal/gov/covid-19/">Ohio COVID-19</a>
                    <a href="https://join.slack.com/t/cantstopcolumbus/shared_invite/zt-cs7p7uxc-QskndeRo_X4b1ovyVJetxg">Join Slack</a>
                    <a href="https://app.slack.com/client/T0101PN34J1/">Open Slack</a>
                </Navigation>
            </div>
        )
    }
}

export default ColumbusNavigation
