import React from "react";
import {Link} from "react-router-dom";
// import '../style/navbar.module.scss';
// import {Switch} from "@mui/material";
import {IconButton, Button, Typography, Toolbar, AppBar, Stack} from '@mui/material';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {solid} from '@fortawesome/fontawesome-svg-core/import.macro';
// import LanguageToggle from "./LanguageToggle";

export default function Navbar({mode, setMode}){
    const handleModeChange = () => {
        if(mode==='light'){
            setMode('dark')
        }else{
            setMode('light')
        }
    };
    return(
        <AppBar>
            <Toolbar>
                <Typography
                    variant='h5'
                    component='div'
                    sx={{flexGrow:1}}
                    aria-label='Music visualiser'
                >
                    <BubbleChartIcon
                        fontSize="large"
                    />
                     Music Visualiser
                </Typography>
                <Stack direction="row" spacing={2}>
                    <Button><Link to='/' underline="none">Log In</Link></Button>
                    <Button><Link to='/support'>Support Us</Link></Button>
                    <Button><Link to='/visualiser'>Visualiser</Link></Button>
                    <IconButton sx={{ ml: 1 }} onClick={handleModeChange} color="default">
                        {mode === 'dark' ? <FontAwesomeIcon icon={solid('moon')} />:<FontAwesomeIcon icon={solid('sun')} />}
                    </IconButton>
                </Stack>
            </Toolbar>
        </AppBar>
        // <nav>
        //     <ul>
        //         {/*<li>*/}
        //         {/*    <Link to='/'>Home</Link>*/}
        //         {/*</li>*/}
        //         <li>
        //             <Link to='/visualiser'>Visualiser</Link>
        //         </li>
        //         <li>
        //             <Link to='/support'>Support Us</Link>
        //         </li>
        //         <li>
        //             <Link to='/'><Button variant="contained">Log In</Button></Link>
        //         </li>
        //
        //     {/*<Switch*/}
        //     {/*    checked={mode}*/}
        //     {/*    onChange={handleModeChange}*/}
        //     {/*    name="toggleDark"*/}
        //     {/*    color="default"*/}
        //     {/*/>*/}
        //         <li>
        //             <IconButton sx={{ ml: 1 }} onClick={handleModeChange} color="default">
        //                 {mode === 'dark' ? <FontAwesomeIcon icon={solid('moon')} />:<FontAwesomeIcon icon={solid('sun')} />}
        //             </IconButton>
        //         </li>
        //         {/*<li>*/}
        //         {/*    <LanguageToggle/>*/}
        //         {/*</li>*/}
        //     </ul>
        // </nav>
    )
}