import React from 'react';
import "./Auth.css";
import Header from "../main/Header";

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
                                    <input type="text" className=""/>
                                </div>
                                <div className="password m-b-30">
                                    <label htmlFor=""> Password *</label>
                                    <input type="text" />
                                </div>
                                <div className="login-btn">
                                    <button>Sign In</button>
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
                                <input type="text" />
                            </div>
                            <div className="email m-b-30">
                                <label htmlFor=""> Email *</label>
                                <input type="text" />
                            </div>
                            <div className="phone m-b-30">
                                <label htmlFor="">Mobile Phone *</label>
                                <input type="phone" />
                            </div>
                            <div className="password m-b-30">
                                <label htmlFor=""> Password *</label>
                                <input type="text" />
                            </div>
                            <div className="login-btn">
                                <button>Create an Account</button>
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Auth;
