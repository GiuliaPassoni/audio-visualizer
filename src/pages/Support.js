import React, {useEffect} from "react";
import Button from '@mui/material/Button';
import dayBtn from './../assets/dayBtn.png';
import nightBtn from './../assets/nightBtn.png';

export default function Support({mode}){
    let day_btn = './../assets/dayBtn.png';
    let night_btn = nightBtn;

    return(
        <>
            <h1>Donation page</h1>
            <a href="https://www.buymeacoffee.com/giuliapassG">
                <Button variant="text">
                    {mode === 'dark' ? "good evening" : "good morning"}
                    {/*<img src={mode==='dark' ? night_btn : day_btn}/>*/}
                </Button>
            </a>
        </>
    )
}