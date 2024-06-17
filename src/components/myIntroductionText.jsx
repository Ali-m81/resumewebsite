import React from 'react'
import Typewriter from "typewriter-effect"
import Typewriterr from "typewriter-effect"
//MY FUNCTION
import { handelDownload } from '../helper/doownloadCV';
//My style 
import style from "../styles/Myintroduction.module.css"
// MY icons

import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";
import { FaGithub } from "react-icons/fa";

function Myintroduction() {
    return (
        <div className={style.main}>
            <ul className={style.icons}>
                <a href="https://github.com/Ali-m81" target='blank'>
                    <li className={style.icon}><FaGithub /></li>
                </a>
                <a href="https://instagram/alimomeni-81" target='blank'>
                    <li className={style.icon}><SlSocialInstagram /></li>
                </a>
                <a href="https://www.linkedin.com/in/ali-momeni-324326293" target='blank'>
                    <li className={style.icon}><SlSocialLinkedin /></li>
                </a>

            </ul>

            <div className={style.texts}>
                <h3>Hey there,</h3>
                <h4> It's Ali Momeni</h4>
                <div className={style.Typewriter}>
                    <Typewriter
                        onInit={(event) => {
                            event
                                .typeString("WELCOME TO MY CREATIVE CORNER!!")
                                .start()
                        }} />
                </div>
                <div className={style.Typewriterr}>
                    <Typewriterr className={style.Typewriter}
                        onInit={(event) => {
                            event
                                .typeString("My name is Ali Momeni ,I am a creative programmer whit one year experience in dynamic website desing....")
                                .pauseFor(2000)
                                .deleteAll()
                                .start()
                        }} options={{
                            loop: true
                        }} />
                </div>
                <div className={style.buttons} >

                    <button onClick={handelDownload} className={style.Sayheloo}>View My CV</button>
                </div>
            </div>
        </div>
    )
}

export default Myintroduction
