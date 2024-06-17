
//my components 
import Myintroduction from './myIntroductionText'
import Myintroductionimge from './myintroductionImge'


// my style
import style from "../styles/homepage.module.css"


function Homepages() {

    return (
        <div className={style.homepage}>
            <Myintroduction />
            <Myintroductionimge />
        </div>
    )
}

export default Homepages
