import React from "react";
import {Link} from "react-router-dom";
import '../style/navbar.module.scss';
// import {Switch} from "@mui/material";
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {solid} from '@fortawesome/fontawesome-svg-core/import.macro';
import LanguageToggle from "./LanguageToggle";

export default function Navbar({mode, setMode}){
    const handleModeChange = () => {
        if(mode==='light'){
            setMode('dark')
        }else{
            setMode('light')
        }
    };
    return(
        <nav>
            <ul>
                {/*<li>*/}
                {/*    <Link to='/'>Home</Link>*/}
                {/*</li>*/}
                <li>
                    <Link to='/visualiser'>Visualiser</Link>
                </li>
                <li>
                    <Link to='/support'>Support Us</Link>
                </li>
                <li>
                    <Link to='/'><Button variant="contained">Log In</Button></Link>
                </li>

            {/*<Switch*/}
            {/*    checked={mode}*/}
            {/*    onChange={handleModeChange}*/}
            {/*    name="toggleDark"*/}
            {/*    color="default"*/}
            {/*/>*/}
                <li>
                    <IconButton sx={{ ml: 1 }} onClick={handleModeChange} color="default">
                        {mode === 'dark' ? <FontAwesomeIcon icon={solid('moon')} />:<FontAwesomeIcon icon={solid('sun')} />}
                    </IconButton>
                </li>
                <li>
                    <LanguageToggle/>
                </li>
            </ul>
        </nav>
    )
}