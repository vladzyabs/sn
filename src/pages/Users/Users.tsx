import React from "react";
import userLogo from "../../assets/img/user-logo.png"
import {connect, ConnectedProps} from "react-redux";
import {DispatchType, RootStateType} from "../../redux/rootStore";
import {
    actionFollowUsers,
    actionSetCurrentPage, actionSetTotalUsersCount,
    actionSetUsers,
    actionUnfollowUsers
} from "../../redux/usersPage/usersAction";
import style from "./Users.module.scss";
import * as axios from "axios";

type PropsUsersType = PropsFromRedux
    & {}

class Users extends React.Component<PropsUsersType> {

    componentDidMount(): void {
        axios.default
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (p: number) => {
        this.props.setCurrentPage(p)
        axios.default
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`)
            .then(response => this.props.setUsers(response.data.items))
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize)
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
                            return <span key={p} className={this.props.currentPage === p ? style.selectedPage : ''}
                                         onClick={() => this.onPageChanged(p)}>{p}</span>
                        })
                    }
                </div>
                {this.props.users.map(user => <div key={user.id} className={style.user}>
                    <div className={style.userPhoto}>
                        <img className={style.userPhotoPic} src={user.photos.small || userLogo} alt=""/>
                        {user.followed
                            ?
                            <button className={style.userBtn}
                                    onClick={() => this.props.onUnfollow(user.id)}>unsubscribe</button>
                            : <button className={style.userBtn}
                                      onClick={() => this.props.onFollow(user.id)}>subscribe</button>
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
}

const mstp = (state: RootStateType) => {
    return {
        users: state.usersData.users,
        pageSize: state.usersData.pageSize,
        totalCount: state.usersData.totalCount,
        currentPage: state.usersData.currentPage
    }
};

const mdtp = (dispatch: DispatchType) => {
    return {
        onFollow: (id: string | number) => {
            dispatch(actionFollowUsers(id))
        },
        onUnfollow: (id: string | number) => {
            dispatch(actionUnfollowUsers(id))
        },
        setUsers: (users: any) => {
            dispatch(actionSetUsers(users))
        },
        setCurrentPage: (page: number) => {
            dispatch(actionSetCurrentPage(page))
        },
        setTotalUsersCount: (count: number) => {
            dispatch(actionSetTotalUsersCount(count))
        }
    }
};

let connector = connect(mstp, mdtp);

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(Users)
