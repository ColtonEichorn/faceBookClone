import { Button } from '@material-ui/core';
import React from 'react';
import "./Login.css";
import { auth, provider } from "./firebase";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";

 
 function Login() {
    //  eslint-disable-next-line
     const [state, dispatch] = useStateValue();
        
    
        const signIn = () => {
            //sign in...
            auth
                .signInWithPopup(provider)
                .then((result) => {
                    dispatch({
                        type: actionTypes.SET_USER,
                        user: result.user,
                    })
                })
                .catch((error) => alert(error.message));
        };
        
     return (
         <div className='login'>
             <div className="login__logo">
             <img
             title="https://iconscout.com/icons/facebook, CC BY-SA 4.0 &lt;https://creativecommons.org/licenses/by-sa/4.0&gt;, via Wikimedia Commons" 
             href="https://commons.wikimedia.org/wiki/File:Facebook_icon_192.png" 
             alt="Facebook icon 192" 
             src="https://upload.wikimedia.org/wikipedia/commons/c/c2/Facebook_icon_192.png"
             />
             <img
             title="Facebook, Inc., Public domain, via Wikimedia Commons" 
             href="https://commons.wikimedia.org/wiki/File:Facebook,_Inc._Logo_2019.png" 
              
             alt="Facebook, Inc. Logo 2019" 
             src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Facebook%2C_Inc._Logo_2019.png/512px-Facebook%2C_Inc._Logo_2019.png"
             />
         </div>
         <Button type="submit" onClick={signIn}
         >
             Sign In
             </Button>
        </div>
     );
 }
 
 export default Login
 