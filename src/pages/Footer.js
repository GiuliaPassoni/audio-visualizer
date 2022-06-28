import React from "react";
import style from './../style/footer.module.scss';

export default function Footer(){
    return(
        <footer className={style.footer}>
            <p>Music Visualiser</p>
            <p>Copyright Giulia Passoni 2022 &copy;</p>
        </footer>
    )
}