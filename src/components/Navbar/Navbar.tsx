import React from "react";
import {NavLink} from "react-router-dom"
import {paths} from "../../layout/paths";
import style from "./Navbar.module.scss";
import Icon, {iconsName, iconsPrefix} from "../Icon/Icon";

function Navbar(props: any) {

    return (
        <div className={style.navbarWrapper}>
            <nav className={style.navbar}>
                <ul>

                    <li><NavLink to={paths.profile}
                                 className={style.navbarLink}
                                 activeClassName={style.activeNavbarLink}>
                        <Icon prefix={iconsPrefix.fas} iconName={iconsName.user} size={'sm'}/>Profile</NavLink></li>

                    <li><NavLink to={paths.users}
                                 className={style.navbarLink}
                                 activeClassName={style.activeNavbarLink}>
                        <Icon prefix={iconsPrefix.fas} iconName={iconsName.users} size={'sm'}/>Users</NavLink></li>

                    <li><NavLink to={paths.dialogs}
                                 className={style.navbarLink}
                                 activeClassName={style.activeNavbarLink}>
                        <Icon prefix={iconsPrefix.fas} iconName={iconsName.comments} size={'sm'}/>Dialogs</NavLink></li>

                    <li><NavLink to={paths.news}
                                 className={style.navbarLink}
                                 activeClassName={style.activeNavbarLink}>
                        <Icon prefix={iconsPrefix.fas} iconName={iconsName.newspaper} size={'sm'}/>News</NavLink></li>

                    <li><NavLink to={paths.music}
                                 className={style.navbarLink}
                                 activeClassName={style.activeNavbarLink}>
                        <Icon prefix={iconsPrefix.fas} iconName={iconsName.music} size={'sm'}/>Music</NavLink></li>

                    <li><NavLink to={paths.settings}
                                 className={style.navbarLink}
                                 activeClassName={style.activeNavbarLink}>
                        <Icon prefix={iconsPrefix.fas} iconName={iconsName.cogs} size={'sm'}/>Setting</NavLink></li>

                </ul>
            </nav>
        </div>
    )
}

export default Navbar