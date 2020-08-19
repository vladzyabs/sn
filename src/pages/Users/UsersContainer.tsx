import React from "react";
import {connect, ConnectedProps} from "react-redux";
import {RootStateType} from "../../redux/rootStore";
import * as action from "../../redux/usersPage/usersAction";
import Users from "./Users";
import Preloader from "../../components/common/Preloader/Preloader";
import {usersAPI} from '../../api/api';

type PropsUsersType = PropsFromRedux
    & {}

class UsersContainer extends React.Component<PropsUsersType> {

    componentDidMount(): void {
        this.props.actionSetLoading(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.actionSetUsers(data.items)
                this.props.actionSetTotalUsersCount(data.totalCount)
                this.props.actionSetLoading(false)
            })
    }

    onPageChanged = (page: number) => {
        this.props.actionSetCurrentPage(page)
        this.props.actionSetLoading(true)
        usersAPI.getUsers(page, this.props.pageSize)
            .then(data => {
                this.props.actionSetUsers(data.items)
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
                   onPageChanged={this.onPageChanged}
                   isFollowingProgress={this.props.isFollowingProgress}
                   onFollowChanged={this.props.actionToggleFollowingProgress}/>
        </>
    }
}

const mstp = (state: RootStateType) => {
    return {
        users: state.usersData.users,
        pageSize: state.usersData.pageSize,
        totalCount: state.usersData.totalCount,
        currentPage: state.usersData.currentPage,
        isLoading: state.usersData.isLoading,
        isFollowingProgress: state.usersData.followingInProgress,
    }
};

let connector = connect(mstp, action);

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(UsersContainer)
