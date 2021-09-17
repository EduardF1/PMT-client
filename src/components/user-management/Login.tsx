import React, {Component} from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import classNames from "classnames";
import {login} from "../../actions/securityActions";

class Login extends  React.Component<any, any>  {
    public static propTypes = {};

    constructor(props: any) {
        super(props);

        this.state = {
            username: "",
            password: ""
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event:any){
        event.preventDefault();
        const loginRequest = {
            username: this.state.username,
            password: this.state.password
        };
        this.props.login(loginRequest);
    }
    onChange(event:any){
        this.setState({[event.target.name]: event.target.value});
    }

    render() {
        return (
            <div className="login">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">Log In</h1>
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        placeholder="Email Address"
                                        name="username"
                                        value={this.state.username}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="password"
                                        className="form-control mt-2 form-control-lg"
                                        placeholder="Password"
                                        name="password"
                                        value={this.state.password}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <input type="submit" className="btn btn-info btn-block w-100 mt-4"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Login.propTypes = {
    login: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = (state: any) => ({
    security: state.security,
    errors: state.errors
});

export default connect(mapStateToProps, {login})(Login);