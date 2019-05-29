import React from 'react';
import "./Auth.css";
import Header from "../main/Header";
import Footer from '../footer/Footer';

const Auth = props => {

    return (
        <div>
            <Header />
            <div className="auth-contant">
                <div className="login-header">
                    <div className="auth-title"> Customer Login</div>
                </div>
                <div className="auth-main">
                    <div className="login-contant">
                        <div className="login-title">Registered Customers</div>
                        <div className="input-field">
                            <form action="">
                                <div className="username m-b-30">
                                    <label htmlFor="">Username *</label>
                                    <input name="username" type="text" className=""/>
                                </div>
                                <div className="password m-b-30">
                                    <label htmlFor=""> Password *</label>
                                    <input name="password" type="text" />
                                </div>
                                <div className="login-btn">
                                    <input name="signIn" type="submit" value="Sign In" placeholder="Sign In"/>
                                </div>
                            </form>
                        </div>
                    </div>


                    <div className="signup-contant">
                        <div className="login-title"> New Customer </div>
                        <div className="input-field">
                        <form action="">
                            <div className="username m-b-30">
                                <label htmlFor="">Username *</label>
                                <input name="username" type="text" />
                            </div>
                            <div className="email m-b-30">
                                <label htmlFor=""> Email *</label>
                                <input name="email" type="text" />
                            </div>
                            <div className="phone m-b-30">
                                <label htmlFor="">Mobile Phone *</label>
                                <input name="phone" type="phone" />
                            </div>
                            <div className="password m-b-30">
                                <label htmlFor=""> Password *</label>
                                <input name="password" type="text" />
                            </div>
                            <div className="login-btn">
                                <input name="signUn" type="submit" value="Create New Account" placeholder="Create New Account"/>
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}



export default Auth;
