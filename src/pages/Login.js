import React, {useState} from "react";
import style from "../style/login.module.scss"
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from './firebase-config';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {solid} from "@fortawesome/fontawesome-svg-core/import.macro";


export default function Login(){
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [profilePic, setProfilePic] = useState('');

    const googleSignIn = () =>{
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                // // This gives you a Google Access Token. You can use it to access the Google API.
                // const credential = GoogleAuthProvider.credentialFromResult(result);
                // const token = credential.accessToken;
                // // The signed-in user info.
                console.log(result);
                setUserLoggedIn(true);
                const userName = result.user.displayName;
                setProfilePic(result.user.photoURL);
                localStorage.setItem("userName", userName);
                // localStorage.setItem("profilePic", profilePic);
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

    const handleImgError = e => {
        e.target.src = profilePic;
    }

    const googleLogOut = () => {
        signOut(auth).then(() => {
            setUserLoggedIn(false);
            return(
                <p>Sign out successful :) </p>
            );
        }).catch((error) => {
            console.log(error);
        });
    }

    return(
        <section className={style.login}>
            <Card>
                { userLoggedIn ===false
                    && <> <FontAwesomeIcon icon={solid('user')} className={style.icon} />
                        <Button variant="contained" onClick={googleSignIn} className={style.button}>Sign In with Google</Button> </>}
                {userLoggedIn === true &&
                    <>
                        <img src={profilePic} className={style.profilepic} alt='User profile picture' loading='lazy' onError={handleImgError}/>
                        <p>Hello {localStorage.getItem("userName")} :)</p>
                    </>}
                {userLoggedIn === true && <Button variant="contained" onClick={googleLogOut} className={style.button}>Log Out</Button> }
            </Card>

        </section>
    )
}