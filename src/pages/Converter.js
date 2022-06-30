import React, {useState, useEffect} from "react";

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
    //possible input types:
    //url from searchbar: https://www.youtube.com/watch?v=mmCnQDUSO4I&ab_channel=TheWickedNorth
    // url from share: https://youtu.be/mmCnQDUSO4I
    // hence:
    // opt1:`https://www.youtube.com/watch?v=${value}&ab_channel=TheWickedNorth`
    // opt2: `https://youtu.be/${value}`

    //states
    const [videoLink, setVideoLink] = useState('');

    //get link from user input on form submit
    const getLink = e =>{
        e.preventDefault();
        setVideoLink(e.target.value);
        console.log(videoLink);
    };

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
                <form onSubmit={(e)=> getLink()}>
                    <FormControl fullWidth sx={{ m: 1, width:'50ch' }}>
                    <InputLabel htmlFor="link-input">Insert Youtube link here</InputLabel>
                    <OutlinedInput
                        id="link-input"
                        label="Insert Youtube link here"
                        placeholder='e.g. https://youtu.be/mmCnQDUSO4I'
                        name='videoLink'
                        value={videoLink}
                    />
                    </FormControl>
                    <Button
                        sx={{width:'20ch'}}
                        type='submit'
                        color='success'
                        variant='contained'
                    >
                        Visualise it!
                    </Button>
                </form>
            </Container>
        </div>
    )
}

export default Converter;