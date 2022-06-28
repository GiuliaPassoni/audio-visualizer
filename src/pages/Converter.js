import React, {useState, useEffect} from "react";
import { createFFmpeg, fetchFile} from '@ffmpeg/ffmpeg';

import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

import style from './../style/converter.module.scss';

//possible input types:
//url from searchbar: https://www.youtube.com/watch?v=mmCnQDUSO4I&ab_channel=TheWickedNorth
// url from share: https://youtu.be/mmCnQDUSO4I

const Converter = () => {
    const [ytLink, setYtLink] = useState('');


    return(
        <div className={style.converter}>
            <Container
                maxWidth="sm"
                // sx={{ display: 'flex', flexWrap: 'wrap' }}
                // component='form'
                // autoComplete="off"
                 // method='' action=''
            >
                {/*<label for='link'>Insert the YouTube link here</label>*/}
                {/*<input type='url' id='link' value='link' name='link' placeholder='e.g. ' required></input>*/}
                <FormControl fullWidth sx={{ m: 1, width:'50ch' }}>
                    <InputLabel htmlFor="outlined-adornment-amount">Insert Youtube link here</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-amount"
                        label="Insert Youtube link here"
                    />
                </FormControl>
                <Button sx={{width:'20ch'}} type='submit' color='success' variant='contained'>Visualise it!</Button>
            </Container>
        </div>
    )
}

export default Converter;