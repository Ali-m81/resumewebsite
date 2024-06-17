import React from 'react'

// my img
import img from "../image/Programming Customizable Isometric Illustrations _ Amico Style.jpeg"

// MY STYLE
import style from "../styles/Aboutme.module.css"

import Typewriter from "typewriter-effect"

function Aboutme() {
    return (
        <div className={style.am}>
            <img src={img} alt="img for about me" />
            <div className={style.amText}>
                <h5>I am Dynamic and Creative</h5>
                <p>
                    My Name is ALI MOMENI and I am a Passionate Front-End Web Developer.
                    there is no Such thing as Failure for me and i have always tried to learn and improve my level.
                    i've always been Fascinated by the Intersection of Dsing and Technology , and i'm Excited to be able to Bring my Creative Ideas to life through CODING.
                </p>
                <div className={style.buttons} >
                    <a href="https://github.com/Ali-m81" target='blank'>
                        <button className={style.Sayheloo}>My GitHub</button>
                    </a>
                </div>
            </div>
            <span className={style.abm}><Typewriter
                onInit={(event) => {
                    event
                        .typeString("WHO AM I ?")
                        .pauseFor(4000)
                        .deleteAll()
                        .typeString("WHO AM I ?")
                        .start()
                }}
                options={{
                    loop: true,
                    autoStart: true
                }}
            /></span>

        </div>
    )
}

export default Aboutme
