import React from 'react'
import {connect, ConnectedProps} from 'react-redux'
import {RootStateType} from '../../redux/rootStore'
import * as action from '../../redux/usersPage/usersAction'
import Users from './Users'
import Preloader from '../../components/common/Preloader/Preloader'
import * as userSelectors from '../../redux/usersPage/userSelectors'

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
      debugger
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
      users: userSelectors.getUsers(state),
      pageSize: userSelectors.getPageSize(state),
      totalCount: userSelectors.getTotalCount(state),
      currentPage: userSelectors.getCurrentPage(state),
      isLoading: userSelectors.getIsLoading(state),
      isFollowingProgress: userSelectors.getIsFollowingProgress(state),
   }
}

let connector = connect(mstp, action)

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(UsersContainer)


