import React, { useState} from "react";
import {useEffect} from "react";
import style from "../style/visualiser.module.scss"

// import p5 from "p5";
import p5 from 'p5';
// import 'p5/lib/addons/p5.sound';


// import {p5sound} from "p5/lib/addons/p5.sound.min";
//import 'p5/lib/addons/p5.sound';
//note: 3 possible youtube links i.e. 3 possible ways that they key will be embedded
//https://www.npmjs.com/package/youtube-mp3-downloader

const a = 30;
// const b = 0.95; //if shaky

const spacing_x = 10;

const glow_r = 255;
const glow_g = 255;
const glow_b = 255;
const alpha = 10;

const max_y = 100;
const min_y = 0;

const max_x = 100;
const min_x = 0;

const MAX_DEV = 100;

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
        // console.log('a load')
        if (song !== undefined) {
            song.pause();
        }
        mp3_to_hist('default.mp3');
    }, [])

    useEffect(() => {
        if (p5ref === undefined) {
            p5ref  = new p5(Sketch, canvasRef.current);
        }
        // draw(canvasRef.current);
    }, [p5ref]);

    const Sketch = (p) => {
        window.p5 = p;
        let fft, amp;

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
                    p.fill(glow_r, glow_g, glow_b, alpha / 5);
                    p.circle(this.trail[i][0], this.trail[i][1], a * 0.8);
                }
                //glow
                p.noStroke();
                p.fill(glow_r, glow_g, glow_b, alpha)
                for (let i = 0; i < a; i++) {
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
                    this.x = spacing_x*h;
                    this.trail = [];
                }

                this.z += 1;
                this.trail.push([this.x, this.y]);

                // //shaky
                // this.target_x = ((Math.random() - 0.5) * 2) * MAX_DEV;
                // this.x = this.x * b + (1 - b) * (this.x + this.target_x);

            }

        }


        let test = new Array(30);

        p.setup = () => {
            // amp = new p5.Amplitude();
            // fft = new p5Class.FFT()
            console.log(test.length)
            for(let i=0;i<test.length;i++){
                test[i] = new myEffect(50+i*50,10+i*50,1);
            }
            p.createCanvas(640, 480)
        }

        p.draw = () => {
            p.background(0);
            // const vol = amp.getLevel();
            // const freqs = fft.analyze()
            // console.log(vol, freqs);
            const h = Math.random() * 200;
            p.fill('red');
            p.stroke('white');
            for(let i = 0;i<test.length;i++){
                //console.log(dataArray);
                p.circle(50+50*i, dataArray[i+2], 20);
                //test[i].draw();
                //test[i].update(h);
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

    // const tick = () => {
    //     console.log(songPlaying,'songPlaying', analyser);
    //     if (songPlaying && analyser !== undefined) {
    //         analyser.getByteTimeDomainData(dataArray);
    //         // console.log(dataArray);
    //         requestAnimationFrame(tick);
    //     }
    // }
    //
    // const draw = (cRef) =>{
    //     cRef.width=500;
    //     cRef.height=500;
    //
    //     const ctx = cRef.getContext("2d");
    //     const gradient = ctx.createLinearGradient(0, 0, 0, cRef.height);
    //     gradient.addColorStop(0, "rgba(35, 7, 77, 1)");
    //     gradient.addColorStop(1, "rgba(204, 83, 51, 1)");
    //     ctx.fillStyle = gradient;
    //
    //     const lineColor = "rgb(" + 100 + ", " + 100 + ", " + 205 + ")";
    //     ctx.strokeStyle = lineColor;
    //     ctx.lineWidth = 10;
    //     ctx.beginPath();
    //     ctx.moveTo(5, 10);
    //     ctx.lineTo(100, 200);
    //     ctx.stroke();
    // }
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


    //move everything in here
    return(
        <div className={style.visualiser}>
            <section ref={canvasRef} />
            <button onClick={songPlaying ? pauseSong : playSong}>{songPlaying ? 'Pause' : 'Play'}</button>
            {/*<button onClick={play}>Play </button>*/}
        {/*include loading message*/}
        </div>
    )
}