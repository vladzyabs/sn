import React from "react";
import style from "./NotFound.module.scss"
import {NavLink} from "react-router-dom"
import {paths} from "../../layout/paths";
import Icon, {iconsName, iconsPrefix} from "../../components/Icon/Icon";

export function NotFound({location}: any) {
    return (
        <div className={style.whoopsWrapper}>
            <h1 className={style.title}>404 page '{location.pathname}' not found</h1>
            <Icon prefix={iconsPrefix.fas} iconName={iconsName.frown} size={'10x'}/>
            <NavLink to={paths.profile} className={style.link}>Home</NavLink>
        </div>
    )
}