import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


// my function ON helper
import { hList } from "../helper/headerList"

// my style
import style from "../styles/header.module.css"

function Header() {
    // MY STATE
    const [textList, setTextlist] = useState("home")
    //MY SCROLL FUNCTION
    const topTOabout = (position, event) => {
        window.scrollTo({
            top: position,
            behavior: 'smooth'
        })
        const Text = event.target.innerText.toLowerCase()
        setTextlist(Text)
    }
    const [scroll, setScroll] = useState(0)
    const scrollHandler = () => {
        const scroller = window.scrollY
        setScroll(scroller)
    }
    //MY EFECCT ONN MY SCROLL
    useEffect(() => {
        window.addEventListener('scroll', scrollHandler)
    }, [scroll])
    useEffect(() => {
        if (window.scrollY > 0) {
            setTextlist("home")
        }
        if (window.scrollY > 528) {
            setTextlist("about")
        }
        if (window.scrollY > 1033) {
            setTextlist("project")
        }
        if (window.scrollY > 1385) {
            setTextlist("contact")
        }
        // window.scroll > 0 && window.scroll < 528 ? setTextlist("home") : (window.scrollY > 528) ? setTextlist("about") : null
        // window.scrollY > 1033 ? setTextlist("project") : (window.scrollY > 1385) ? setTextlist("contact") : null
    }, [scroll])
    return (
        <header>
            <h1>ALI <span>MOMENI</span></h1>
            <div className={style.List}>
                {hList.map((i) => (
                    <Link to={textList}>
                        <li key={i.id}
                            onClick={(event) => topTOabout(i.scroll, event)}
                            className={`${style.h} ${i.list.toLowerCase() === textList ? style.selected : null}`}>{i.list}</li>
                    </Link>
                ))}
            </div>
            <div className={style.button}>
                <a href="https://www.linkedin.com/in/ali-momeni-324326293" target='blank'>
                    <button>Let's Talk</button>
                </a>
            </div>
        </header >
    )
}
export default Header
