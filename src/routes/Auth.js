
import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React from "react";
import { auth } from "../firebase";


const Auth = ()=>{

    const onSocialLogin = async(event)=>{
        const {target:{name}}= event;
    let provider;
    if(name==="google"){
       provider = new GoogleAuthProvider();
    }else if(name==="facebook"){
        provider = new FacebookAuthProvider();
    }
    const data = await signInWithPopup(auth, provider);
              console.log(data);
    }


    return(
        <div>
            <button onClick={onSocialLogin} name="google">Google Login</button>
            <button onClick={onSocialLogin} name="facebook">FaceBook Login</button>
        </div>
    )
    
}
export default Auth;