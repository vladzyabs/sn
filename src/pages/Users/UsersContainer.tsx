import React from "react";
import {connect, ConnectedProps} from "react-redux";
import {RootStateType} from "../../redux/rootStore";
import * as action from "../../redux/usersPage/usersAction";
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../../components/common/Preloader/Preloader";

type PropsUsersType = PropsFromRedux
    & {}

class UsersContainer extends React.Component<PropsUsersType> {

    componentDidMount(): void {
        this.props.actionSetLoading(true)
        axios.default
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.actionSetUsers(response.data.items)
                this.props.actionSetTotalUsersCount(response.data.totalCount)
                this.props.actionSetLoading(false)
            })
    }

    onPageChanged = (page: number) => {
        this.props.actionSetCurrentPage(page)
        this.props.actionSetLoading(true)
        axios.default
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.actionSetUsers(response.data.items)
                this.props.actionSetLoading(false)
            })
    }

    render() {
        return <>
            {this.props.isLoading && <Preloader/>}
            <Users users={this.props.users}
                   pageSize={this.props.pageSize}
                   totalCount={this.props.totalCount}
                   currentPage={this.props.currentPage}
                   onFollow={this.props.actionFollowUsers}
                   onUnfollow={this.props.actionUnfollowUsers}
                   onPageChanged={this.onPageChanged}/>
        </>
    }
}

const mstp = (state: RootStateType) => {
    return {
        users: state.usersData.users,
        pageSize: state.usersData.pageSize,
        totalCount: state.usersData.totalCount,
        currentPage: state.usersData.currentPage,
        isLoading: state.usersData.isLoading
    }
};

let connector = connect(mstp, action);

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(UsersContainer)
