import React,{ Fragment } from "react";

const Login = () => {
    return (
        <Fragment>
            <div className="container login">
                <div className="row">
                    <div className="col-md-4 col-md-offset-4">
                        <div className="login-banner text-center">
                            <h1><i className="fa fa-gears"></i> Flex Admin</h1>
                        </div>
                        <div className="portlet portlet-green">
                            <div className="portlet-heading login-heading">
                                <div className="portlet-title">
                                    <h4><strong>Login to Flex Admin!</strong>
                                    </h4>
                                </div>
                                <div className="portlet-widgets">
                                    <button className="btn btn-white btn-xs"><i className="fa fa-plus-circle"></i> New User</button>
                                </div>
                                <div className="clearfix"></div>
                            </div>
                            <div className="portlet-body">
                                <form accept-charset="UTF-8" role="form">
                                    <fieldset>
                                        <div className="form-group">
                                            <input className="form-control" placeholder="E-mail" name="email" type="text" />
                                        </div>
                                        <div className="form-group">
                                            <input className="form-control" placeholder="Password" name="password" type="password" value=""/>
                                        </div>
                                        <div className="checkbox">
                                            <label>
                                                <input name="remember" type="checkbox" value="Remember Me" />Remember Me
                                            </label>
                                        </div>
                                        <br/>
                                        <a href="#" className="btn btn-lg btn-green btn-block">Sign In</a>
                                    </fieldset>
                                    <br/>
                                    <p className="small">
                                        <a href="#">Forgot your password?</a>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}


export default Login;