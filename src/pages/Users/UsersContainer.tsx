import React from 'react'
import {connect, ConnectedProps} from 'react-redux'
import {RootStateType} from '../../redux/rootStore'
import * as action from '../../redux/usersPage/usersAction'
import Users from './Users'
import Preloader from '../../components/common/Preloader/Preloader'

type PropsUsersType = PropsFromRedux
   & {}

class UsersContainer extends React.Component<PropsUsersType> {

   componentDidMount(): void {
      this.props.thunkGetUser(this.props.currentPage, this.props.pageSize)
   }

   onPageChanged = (page: number) => {
      this.props.actionSetCurrentPage(page)
      this.props.thunkGetUser(page, this.props.pageSize)
   }

   render() {
      return <>
         {this.props.isLoading && <Preloader/>}
         <Users users={this.props.users}
                pageSize={this.props.pageSize}
                totalCount={this.props.totalCount}
                currentPage={this.props.currentPage}
                onFollow={this.props.thunkFollow}
                onUnfollow={this.props.thunkUnfollow}
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
