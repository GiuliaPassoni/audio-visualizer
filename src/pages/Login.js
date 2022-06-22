import React from "react";
import style from "../style/login.module.scss"
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from './firebase-config';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {solid} from "@fortawesome/fontawesome-svg-core/import.macro";


export default function Login(){
    const googleSignIn = () =>{
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                // // This gives you a Google Access Token. You can use it to access the Google API.
                // const credential = GoogleAuthProvider.credentialFromResult(result);
                // const token = credential.accessToken;
                // // The signed-in user info.
                // const user = result.user;
                // // ...
                console.log(result);
            }).catch((error) => {
            // Handle Errors here.
            // const errorCode = error.code;
            // const errorMessage = error.message;
            // // The email of the user's account used.
            // const email = error.customData.email;
            // // The AuthCredential type that was used.
            // const credential = GoogleAuthProvider.credentialFromError(error);
            console.log(error);
        });
    }


    return(
        <section className={style.login}>
            <Card>
                <FontAwesomeIcon icon={solid('user')} className={style.icon} />
                <Button variant="contained" onClick={googleSignIn} className={style.button}>Log In</Button>
            </Card>

        </section>
    )
}