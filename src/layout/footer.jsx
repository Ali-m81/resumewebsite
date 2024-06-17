import React from 'react'
//MY FUNCTION
import { handelDownload } from '../helper/doownloadCV';
// my style
import style from "../styles/footer.module.css"
// MY icons
import { FiPhone } from "react-icons/fi";
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";
import { FaGithub } from "react-icons/fa";


function Footer() {
    return (
        <footer>
            <h1>ALI <span>MOMENI</span> </h1>
            <div className={style.connect}>
                <h5>Have a Project in Mind!? Let,s <span>Get</span> To work.</h5>
                <div className={style.buttons} >
                    <a href="https://www.linkedin.com/in/ali-momeni-324326293" target='blank'>
                        <button className={style.Sayheloo}>Say Heloo</button>
                    </a>
                    <button onClick={handelDownload}>View My CV</button>
                </div>
            </div>

            <div>
                <ul className={style.icons}>
                    <a href="https://github.com/Ali-m81" target='blank'>
                        <li><FaGithub /></li>
                    </a>
                    <a href="https://instagram/alimomeni-81" target='blank'>
                        <li><SlSocialInstagram /></li>
                    </a>
                    <a href="https://www.linkedin.com/in/ali-momeni-324326293" target='blank'>
                        <li><SlSocialLinkedin /></li>
                    </a>

                </ul>
            </div>
        </footer>
    )
}

export default Footer
