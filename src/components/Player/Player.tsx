import React, { useEffect } from 'react';
import '../../../src/styles.css';

export default function Player() {
    const [songUrl, setSongUrl] = React.useState();
    useEffect(() => {
        fetch('https://jiosaavn-api-clone-phi.vercel.app/search/songs?query=thendral&page=1&limit=1')
            .then((res) => res.json())
            .then((data) => {
                setSongUrl(data.data.results[0].downloadUrl[2].link);
            });
    }, []);

    var audio = new Audio(songUrl);

    function formatTimeDuration(audio: HTMLAudioElement) {
        let sec = audio.duration;
        let hr = Math.floor(sec / 3600);
        let min = sec / 60;
        let modMin = Math.floor(min);
        let modSec = Math.floor((min - modMin) * 60);
        console.log(modMin, ':', modSec);
    }

    function formatCurrentTime(audio) {
        let sec = audio.currentTime;
        let hr = Math.floor(sec / 3600);
        let min = sec / 60;
        let modMin = Math.floor(min);
        let modSec = Math.floor((min - modMin) * 60);
        console.log(modMin, ':', modSec);
    }

    function handlePlay() {
        console.log(audio.duration);
        // formatTimeDuration(audio);
        setInterval(() => formatCurrentTime(audio), 1000);
        console.log(audio.currentTime);
        console.log(audio.currentSrc);
        audio.play();
    }

    function handlePause() {
        audio.pause();
    }

    function handleFastForward() {
        audio.currentTime += 10;
    }

    function handleRewind() {
        audio.currentTime -= 10;
    }

    return (
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-darker border-t-2 border-slate-400">
            <h1 className="text-center">Kun Faya Kun</h1>
            <div className="text-light">
                <input type="range" name="" id="" className="w-full" value="173" max="489" onChange={() => {}} />
                <span>1:73</span> / <span>4:89</span>
            </div>
            <div className="flex gap-3 justify-center">
                <button className="bi bi-play-fill btn-outline" onClick={handlePlay}></button>
                <button className="bi bi-pause-fill btn-outline" onClick={handlePause}></button>
                <button className="bi bi-rewind-fill btn-outline" onClick={handleRewind}></button>
                <button className="bi bi-fast-forward-fill btn-outline" onClick={handleFastForward}></button>
            </div>
        </div>
    );
}
