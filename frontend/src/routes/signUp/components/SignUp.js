import React from 'react';
import APPCONFIG from 'constants/Config';
import TextField from 'material-ui/TextField';

class SignUp extends React.Component {
    constructor() {
        super();
        this.state = {
            brand: APPCONFIG.brand
        };
    }

    render() {
        return (
            <div className="page-signup">
                <div className="main-body">
                    <div className="body-inner">

                        <div className="card bg-white">
                            <div className="card-content">
                                <section className="logo text-center">
                                    <h1><a href="#/">{this.state.brand}</a></h1>
                                </section>

                                <form className="form-horizontal">
                                    <fieldset>
                                        <div className="form-group">
                                            <TextField
                                                floatingLabelText="Username"
                                                fullWidth={true}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <TextField
                                                floatingLabelText="Email"
                                                type="email"
                                                fullWidth={true}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <TextField
                                                floatingLabelText="Password"
                                                type="password"
                                                fullWidth={true}
                                            />
                                        </div>
                                        <div className="divider"></div>
                                        <div className="form-group">
                                            <p className="text-small">By clicking on sign up, you agree to <a href="javascript:;"><i>terms</i></a> and <a href="javascript:;"><i>privacy policy</i></a></p>
                                        </div>
                                    </fieldset>
                                </form>
                            </div>
                            <div className="card-action no-border text-right">
                                <a href="#/login" className="color-gray-light">Login</a>
                                <a href="#/" className="color-primary">Sign Up</a>
                            </div>
                        </div> 

                    </div>
                </div>
            </div>
        )
    }
}

module.exports = SignUp;
