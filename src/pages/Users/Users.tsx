import React from "react";
import {connect, ConnectedProps} from "react-redux";
import {DispatchType, RootStateType} from "../../redux/rootStore";
import {actionFollowUsers, actionUnfollowUsers} from "../../redux/usersPage/usersAction";
import style from "./Users.module.scss";

type PropsUsersType = PropsFromRedux
    & {}

function Users(props: PropsUsersType) {
    return (
        <div className={style.users}>
            <h1>Users</h1>
            {props.users.map(user => <div key={user.id} className={style.user}>
                <div  className={style.userPhoto}>
                    <img className={style.userPhotoPic} src={user.photo} alt=""/>
                    {user.followed
                        ? <button className={style.userBtn} onClick={() => props.onUnfollow(user.id)}>unsubscribe</button>
                        : <button className={style.userBtn} onClick={() => props.onFollow(user.id)}>subscribe</button>
                    }
                </div>
                <div className={style.userInf}>
                    <div className={style.userName}>
                        <span>{user.fullName}</span>
                        <span>{user.status}</span>
                    </div>
                    <div className={style.userLocation}>
                        <span>{user.location.county}</span>
                        <span>{user.location.city}</span>
                    </div>
                </div>
            </div>)}
        </div>
    )
}

const mstp = (state: RootStateType) => {
    return {
        users: state.usersData.users
    }
};

const mdtp = (dispatch: DispatchType) => {
    return {
        onFollow: (id: string) => {
            dispatch(actionFollowUsers(id))
        },
        onUnfollow: (id: string) => {
            dispatch(actionUnfollowUsers(id))
        },
    }
};

let connector = connect(mstp, mdtp);

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(Users)
