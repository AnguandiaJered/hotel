import React,{ Fragment } from "react";
import { Link } from "react-router-dom";
import logo from '../images/logo.png';
import { FormControl, FormGroup, Input, InputLabel } from '@mui/material';

const Login = () => {
    return (
        <Fragment>
            <div className="login">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 offset-3 mt-3">
                            <div className="text-center text-white">
                                <h1> <img  src={logo} height={120} width={600} alt="" /></h1>
                            </div>
                            <div className="portlet-green mt-3 ">
                                <div className="login-heading">
                                    <div className="title text-center">
                                        <h4>
                                            <strong> <i className="fa fa-gears"></i>  Gold Star International Hotel!</strong>
                                        </h4>
                                    </div>                                    
                                </div>
                                <div className="col-md-11 mt-5 ml-4">
                                    <FormGroup>
                                        <div className="">
                                            <div className="form-group">
                                                <Input className="form-control" placeholder="E-mail" name="email" type="text" />
                                            </div>
                                            <div className="form-group">
                                                <Input className="form-control" placeholder="Password" name="password" type="password" />
                                            </div>
                                            <div className="checkbox">
                                                <InputLabel>
                                                    <Input name="remember" type="checkbox" value="Remember Me" />Remember Me
                                                </InputLabel>
                                            </div>
                                           <FormControl className="form-group mt-4 col-md-12">
                                                <Link to="/" className="btn btn-green col-md-10 text-white">Sign In</Link>
                                           </FormControl>                                            
                                        </div>                                     
                                        <p className="small mt-3">
                                            <Link to="#" className="text-green">Forgot your password?</Link>
                                        </p>
                                    </FormGroup><br/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>       
            </div>
        </Fragment>
    )
}


export default Login;