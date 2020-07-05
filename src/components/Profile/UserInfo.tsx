import React from "react";
import style from "./Profile.module.scss";

function UserInfo(props: any) {
    return (
        <div className={style.userInf}>
            <div className={style.userPhoto}>
                <img src="https://img.icons8.com/plasticine/2x/user.png" alt=""/>
            </div>
            <div className={style.aboutUser}>
                <div className={style.userName}>
                    <h1>Big Samurai</h1>
                </div>
                <div className={style.userDesc}>
                    <p>City: Mogilev</p>
                    <p>Education: BRU</p>
                    <p>VK: <a href="#/">vk.com</a></p>
                    <p>Instagrm: <a href="#/">instagram.com</a></p>
                </div>
            </div>
        </div>
    )
}

export default UserInfo