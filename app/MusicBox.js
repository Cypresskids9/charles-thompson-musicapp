'use client'
import { useState } from "react"
import styles from "./styles.css"

export default function MusicBox(props){ // component
    const [isHovered, setIsHovered] = useState(false)
    
    return (
        <div className="music-grid">
            <div className="image-box">
                <img src={ props.source} alt="cover" className="music-image" onClick={() => {
                    window.open(props.link, '_blank')
                }} onMouseEnter={() => {
                    setIsHovered(true)
                }} onMouseLeave={() => {
                    setIsHovered(false)
                }}/>
                {isHovered ? <img src="play-button.png" className="play-button" /> : <></>}
            </div>
            <div className="music-info-box">
                <h1 className="song-name">{props.name}</h1>
                <p className="music-supp-text">on</p>
                <p className="album">{props.album}</p>
                <p className="music-supp-text">by</p>
                <h1 className="artist-name">{props.artist}</h1>
                <p className="lyric">{props.lyric}</p>
            </div>
        </div>
    )
}

/*
    The Ultimate Showdown of Ultimate Destiny: Dinasourchestra: Lemon Demon: https://www.youtube.com/watch?v=nbo4y7pUlZA 'Godzilla took a bite out of Optimus Prime'
    Modify: View-Monster: Lemon Demon: https://youtu.be/HBIdj-9vIFc: 'Now it's got somethin' of a steam punk smile, but it's alright.'
    The Duck Song 1-4: Bryant Oden: https://youtu.be/MtN1YnoL46Q ; https://youtu.be/7jjcAuEYW9M ; https://youtu.be/Ru4a-js4My4 ; https://youtu.be/paHE4L-x490: 'A duck walked up to a corner store'
    My Trains: The FuMP: Lemon Demon: https://youtu.be/ZV9mnSHOm6c: 'What'cha gonna- What'cha gonna do? What'cha- What'cha gonna do?'
    BLOODY HILLS: Project: Bloody Hills: MuffinCakes65: https://soundcloud.com/muffincakes65/bloody-hills-combat: no lyrics
    Soft Fuzzy Man: Spirit Phone: Lemon Demon: https://youtu.be/7AQdzGdieB8?list=OLAK5uy_kGJN5TvKfC3V4sO6So4wu9lnUwl_ks4Zc: 'Why can't you see me?'
    Yakko's World: N/A: Animaniacs: https://youtu.be/x88Z5txBc7w: 'Italy, Turkey and Greece!'
    Swalla: Jason Derulo: Nu King: https://youtu.be/nz_PqfEr5-s: 'Shimmy shimmy ay shimmy ay shimmy ah. (drank) Swa-la-la-la'
*/