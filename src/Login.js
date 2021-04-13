import { Button } from '@material-ui/core';
import React from 'react';
import './Login.css';
function Login() {
    const signIn = () =>{

    }
    return (
        <div className="login">
            <div className="login-logo">
                <img src="https://i2.wp.com/inmobiliariasejasygonzalez.com.uy/wp-content/uploads/2016/11/logo-facebook.png" alt="logo facebook"/>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf0bCw_7XTOkSfmN_XBpPkPgjqTDo-xcyYuMDY2kCWTHzo6Ju_yvMZ4xT6DeltdlO8rt8&usqp=CAU" alt=""/>
            </div>
            <Button type="submit" onClick={signIn} >Sign IN</Button>
        </div>     
    )
}
export default Login
