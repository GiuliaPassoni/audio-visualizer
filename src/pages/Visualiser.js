import React, { useState} from "react";
import {useEffect} from "react";
import style from "../style/visualiser.module.scss";
import Button from '@mui/material/Button';

import "./../globals";
import "p5/lib/addons/p5.sound";
import * as p5 from "p5";

//note: 3 possible youtube links i.e. 3 possible ways that they key will be embedded
//https://www.npmjs.com/package/youtube-mp3-downloader

export default function Visualiser(){
    const [songPlaying, setSongPlaying] = useState(false);
    const [song, setSong] = useState(undefined);
    const [audioCtx, setAudioCtx] = useState(undefined);
    const canvasRef = React.createRef()
    let p5ref;
    const dataArray = new Uint8Array(32);
    const [analyser, setAnalyser] = useState(undefined);
    // let song;

    useEffect(() => {
        if (song !== undefined) {
            song.pause();
        }
        mp3_to_hist('default.mp3');
        console.log('effect 1, mp3hist', song)
    }, [])

    useEffect(() => {
        if (p5ref === undefined) {
            p5ref  = new p5(Sketch, canvasRef.current);
        }
        // draw(canvasRef.current);
    }, [p5ref]);

    const Sketch = (p) => {
        // window.p5 = p;
        let fft, amp;
        console.log('my song is here ', song, 'playing', songPlaying)

        class myEffect {
            constructor(x, y, z) {
                this.x = x;
                this.y = y;
                this.z = z;
                this.trail = [];
                this.target_x = 0;
            }

            draw() {
                //trail
                for (let i = 0; i < this.trail.length; i++) {
                    p.fill(255, 255, 255, 10/ 5);
                    p.circle(this.trail[i][0], this.trail[i][1], 30 * 0.8);
                }
                //glow
                p.noStroke();
                p.fill(255, 255, 255, 10)
                for (let i = 0; i < 30; i++) {
                    p.circle(this.x, this.y, i * 2);
                }
            }

            update(h) {
                this.y += 1;
                // if(this.y>=max_y || this.y <=min_y){
                //   this.y = min_y
                //   this.trail =[];
                // }

                if (this.y > 200) {
//       if not randomly, remove h parameter (or uncomment the if above)
                    this.y = h;
                    this.x = 10*h;
                    this.trail = [];
                }

                this.z += 1;
                this.trail.push([this.x, this.y]);
            }
        }

        let test = new Array(30);

        p.setup = () => {
            console.log(song, 'song in drawing')
            amp = new p5.Amplitude();
            // amp = new window.p5.Amplitude();
            // amp = new p5.constructor.Amplitude();
            // amp = new Object.getPrototypeOf(p).constructor.Amplitude();
            fft = new p5.FFT();
            // for(let i=0;i<test.length;i++){
            //     test[i] = new myEffect(50+i*50,10+i*50,1);
            // }
            p.createCanvas(600, 600)
        }

        p.draw = () => {
            p.background(0);
            const vol = amp.getLevel();
            const freqs = fft.analyze()
            const h = Math.random() * 200;
            p.fill('red');
            p.stroke('white');

            for (let i = 5; i < 1024; i += 5) {
                for (let j = 0; j < 20; j ++) {
                    // for (let i = 5; i < 800; i += 50) {
                    //     for (let j = 0; j < 800; j += 50) {
                            // p.fill(vol * 1000, vol * 200, j / 2);
                            // p.ellipse(i + Math.random(vol * 30), j + Math.random(vol * 30), 20);
                            p.noStroke()
                            p.fill(255, 255, 255, 10);

                            p.circle(10*i, p.height/2-freqs[i], j*2);

                            p.circle(10*i, p.height/2+freqs[i], j*2);
                    }
                }

        }


    }

    function mp3_to_hist(filename){
        const tune = new Audio(filename);
        setSong(tune);
        const audioContext = new AudioContext();
        setAudioCtx(audioContext);
        //console.log(audioContext.sampleRate);
        const audioSource = audioContext.createMediaElementSource(tune);
        const myAnalyser = audioContext.createAnalyser();
        audioSource.connect(myAnalyser);
        myAnalyser.connect(audioContext.destination);
        myAnalyser.fftSize = 64;
        setAnalyser(myAnalyser);
        //console.log(dataArray)

        return 'hi';
    }

    const playSong = () => {
        console.log('playing', songPlaying)
        if (song === undefined) {
            return;
        }
        audioCtx.resume()
        setSongPlaying(true);
        song.play();
    }

    const pauseSong = () => {
        console.log('pause', songPlaying)
        if (song === undefined) {
            return;
        }

        song.pause();
        setSongPlaying(false);
    }

    return(
        <div className={style.visualiser}>
            <section ref={canvasRef} />
            <Button onClick={songPlaying ? pauseSong : playSong} variant="outlined">{songPlaying ? 'Pause' : 'Play'}</Button>
            {/*<button onClick={play}>Play </button>*/}
        {/*include loading message*/}
        </div>
    )
}