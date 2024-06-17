import React from 'react'
import image from "../image/Programming Customizable Flat Illustrations _ Rafiki Style.jpeg"
// My style
import style from "../styles/Myintroductionimge.module.css"

function Myintroductionimge() {
    return (
        <div>
            <img src={image} alt="" style={style} />
        </div>
    )
}

export default Myintroductionimge
