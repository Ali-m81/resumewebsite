//MY ICONS
import { FaCode } from "react-icons/fa6";
import { TbUserHexagon } from "react-icons/tb";
import { MdOutlineDynamicFeed } from "react-icons/md";

// MY STYLE
import style from "../styles/Servises.module.css"

//MY EFFECT
import Typewriter from "typewriter-effect"
function ServisesList() {

    const servisesList = [
        {
            id: 1,
            icon: <MdOutlineDynamicFeed />,
            title: 'Dynamic Programing',
            text: 'create responsive websites that work on a wide range of devices , making designmore efficient and beatifull.'
        }
        ,
        {
            id: 2,
            icon: <TbUserHexagon />,
            title: 'User Experience',
            text: 'understanding user behaviour , needs and aesthetic prienciples to craft visually appealing and engaging user experience.'
        }
        ,
        {
            id: 3,

            icon: <FaCode />,
            title: 'clean code',
            text: 'writing code that is well-structured, readble , and maintainable.it involves following coding best practices.'
        }
    ]


    return (
        <div className={style.cServises}>
            {servisesList.map((e) => (
                <div key={e.id} className={style.servises}>
                    {e.icon}
                    <span>{e.title}</span>
                    <p>{e.text}</p>
                </div>
            ))}
            <span className={style.services}><Typewriter
                onInit={(event) => {
                    event
                        .typeString("services...")
                        .pauseFor(4000)
                        .deleteAll()
                        .typeString("services...")
                        .pauseFor(4000)
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

export default ServisesList