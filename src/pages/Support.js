import React from "react";
import {Visualizer} from "react-music-visualizer";

export default function Support(){

    const path = "https://www.buymeacoffee.com/giuliapassG";

    return(
        <>
            <h1>Donation page</h1>
            <Visualizer audioPreviewUrl='https://www.youtube.com/watch?v=uk96O7N1Yo0&t=289s' />
            {/*<iframe src={path}/>*/}
        </>
    )
}