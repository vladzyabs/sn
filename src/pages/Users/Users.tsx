import React from "react";
import userLogo from "../../assets/img/user-logo.png"
import style from "./Users.module.scss";
import {UserType} from "../../redux/usersPage/usersType";

type PropsUsersType = {
    users: UserType[]
    pageSize: number
    totalCount: number
    currentPage: number
    onFollow: (id: string | number) => void
    onUnfollow: (id: string | number) => void
    onPageChanged: (page: number) => void
}

function Users(props: PropsUsersType) {
    let pagesCount = Math.ceil(props.totalCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div className={style.users}>
            <h1>Users</h1>
            <div>
                { 
                    pages.map(p => {
                        return <span key={p} className={props.currentPage === p ? style.selectedPage : ''}
                                     onClick={() => props.onPageChanged(p)}>{p}</span>
                    })
                }
            </div>
            {props.users.map(user => <div key={user.id} className={style.user}>
                <div className={style.userPhoto}>
                    <img className={style.userPhotoPic} src={user.photos.small || userLogo} alt=""/>
                    {user.followed
                        ?
                        <button className={style.userBtn}
                                onClick={() => props.onUnfollow(user.id)}>unsubscribe</button>
                        : <button className={style.userBtn}
                                  onClick={() => props.onFollow(user.id)}>subscribe</button>
                    }
                </div>
                <div className={style.userInf}>
                    <div className={style.userName}>
                        <span>{user.name}</span>
                        <span>{user.status}</span>
                    </div>
                    <div className={style.userLocation}>
                        <span>{'user.location.county'}</span>
                        <span>{'user.location.city'}</span>
                    </div>
                </div>
            </div>)}
        </div>
    )
}

export default Users
