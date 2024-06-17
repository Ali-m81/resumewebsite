//MY STYLE 
import style from "../styles/Project.module.css"

//MY PROJECT
import { projectList } from "../helper/projectList"

//MY ICON
import { HiArrowRight } from "react-icons/hi2";
function Project() {
    return (
        <div className={style.main}>

            <div className={style.pmain}>
                <span className={style.title}>Explore My Lasted Project</span>
                {projectList.map((e) => (
                    <a href={e.Adress} target="blank">
                        <div className={style.pcart}>
                            <img src={e.img} alt={e.title} />
                            < div className={style.pb}>
                                <p>{e.nameOFprojecr}</p>
                                <button><HiArrowRight /></button>
                            </div>
                        </div>
                    </a>
                ))}
            </div>

        </div>
    )
}

export default Project
