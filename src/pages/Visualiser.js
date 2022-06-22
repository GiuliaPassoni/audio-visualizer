import React from "react";
import {useEffect} from "react";
import style from "../style/visualiser.module.scss"
//note: 3 possible youtube links i.e. 3 possible ways that they key will be embedded
//https://www.npmjs.com/package/youtube-mp3-downloader

export default function Visualiser(){
    function mp3_to_hist(filename){
        let song = new Audio(filename);
        const audioContext = new AudioContext();
        const audioSource = audioContext.createMediaElementSource(song);
        const analyser = audioContext.createAnalyser();
        audioSource.connect(analyser);
        analyser.connect(audioContext.destination);
        analyser.fftSize = 2048;
        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);

        const tick = () => {
            analyser.getByteTimeDomainData(dataArray);
            //console.log(dataArray);
            requestAnimationFrame(tick);
        }

        // song.play();
        song.pause();
        //tick();

        return 'hi !'
    }

    useEffect(() => {
        console.log(mp3_to_hist('default.mp3'));

        // draw(canvasRef.current);
    }, []);

    const canvasRef = React.createRef();
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


    //move everything in here
    return(
        <section className={style.visualiser}>
            <canvas ref={canvasRef} />
        {/*include loading message*/}
        </section>
    )
}