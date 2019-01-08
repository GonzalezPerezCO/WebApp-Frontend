import React from 'react';
import Home from '../Components/Home';
import config from '../Components/Config';
import { UserAgentApplication } from 'msal';
import { getUserDetails } from './GraphService';

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.userAgentApplication = new UserAgentApplication(config.appId, null, null);

        this.state = {
            error: null,
        };
    }

    async login()  {
        try {
            await this.userAgentApplication.loginPopup(config.scopes);
            await this.getUserProfile();
        }
        catch(error) {
            let err = error.split('|');
 
            this.setState({
                error: { message: err[0], debug: err[1] }
            });
        }
      }
    
    async getUserProfile() {
        try {
            let accessToken = await this.userAgentApplication.acquireTokenSilent(config.scopes);
            if (accessToken) {
                let user = await getUserDetails(accessToken);
                sessionStorage.setItem('name', user.displayName);
                sessionStorage.setItem('email', user.mail);
            }
        }
        catch (error) {
            let err = error.split('|');

            this.setState({
                error: { message: err[0], debug: err[1] }
            });
        }
    }
    errorMessage(props) {
        return (
            <span>
                <h6>{props.debug}</h6>
                <p><code>{props.message}</code></p>
            </span>
        );
    }
    render() {
        let errs = null;
        if(this.state.error) {
            errs = this.errorMessage(this.state.error);
        }
        return(
            <Home 
              error={errs}
              loginButton={this.login.bind(this)} />        
        );
    }
}

export default HomePage;