import React from "react";
import {connect, ConnectedProps} from "react-redux";
import {RootStateType} from "../../redux/rootStore";
import {
    actionFollowUsers,
    actionSetCurrentPage, actionSetTotalUsersCount,
    actionSetUsers,
    actionUnfollowUsers
} from "../../redux/usersPage/usersAction";
import * as axios from "axios";
import {UserType} from "../../redux/usersPage/usersType";
import Users from "./Users";

type PropsUsersType = PropsFromRedux
    & {}

class UsersContainer extends React.Component<PropsUsersType> {

    componentDidMount(): void {
        axios.default
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (page: number) => {
        this.props.setCurrentPage(page)
        axios.default
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => this.props.setUsers(response.data.items))
    }

    render() {
        return <Users users={this.props.users}
                      pageSize={this.props.pageSize}
                      totalCount={this.props.totalCount}
                      currentPage={this.props.currentPage}
                      onFollow={this.props.onFollow}
                      onUnfollow={this.props.onUnfollow}
                      onPageChanged={this.onPageChanged}/>
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

const mdtp = {
    onFollow: (id: string | number) => (actionFollowUsers(id)),
    onUnfollow: (id: string | number) => (actionUnfollowUsers(id)),
    setUsers: (users: UserType[]) => (actionSetUsers(users)),
    setCurrentPage: (page: number) => (actionSetCurrentPage(page)),
    setTotalUsersCount: (count: number) => (actionSetTotalUsersCount(count))
};

let connector = connect(mstp, mdtp);

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(UsersContainer)
