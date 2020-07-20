import React from "react";
import preloader from "../../../assets/img/preloader.svg"
import style from "./Preloader.module.scss"
import {ReactSVG} from "react-svg";

function Preloader() {
    return (
        <div className={style.preloader}>
            <ReactSVG src={preloader}/>
        </div>
    )
}

export default Preloader
