import React from 'react'
import herovid from "../assets/hero_video.mp4"


function Hero() {
return (
    <div className='md: h-[100vh] bg-black 'id="/">
        <video className='w-full h-full -z-10  object-cover'
            src={herovid}
            autoPlay
            loop
            muted
        >
            
        </video>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
        <h1 className='text-4xl font-bold text-white'>
        KIFARU AFRICA DEVELOPERS
            </h1>
    </div>
    </div>
);
}

export default Hero;