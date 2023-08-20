import { forwardRef, useImperativeHandle, useRef } from 'react';

import vid from './video/vd.mp4'

function Video(props, video) {
    const videoRef = useRef();

    useImperativeHandle(video, () => ({
        play() {
            videoRef.current.play();
        },
        pause() {
            videoRef.current.pause();
        }
    })) 

    return ( 
        <video 
            ref={videoRef}
            width={250}
            src={vid}
        />
    );
}

export default forwardRef(Video);