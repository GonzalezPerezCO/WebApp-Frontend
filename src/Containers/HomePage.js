import React from 'react';
import Home from '../Components/Home';

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null,
        };
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
            <Home error={errs}/>        
        );
    }
}

export default HomePage;