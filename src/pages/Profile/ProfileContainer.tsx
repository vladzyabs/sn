import React from 'react'
import {RouteComponentProps, withRouter} from 'react-router'
import {RootStateType} from '../../redux/rootStore'
import * as actions from '../../redux/profilePage/profileAction'
import {connect, ConnectedProps} from 'react-redux'
import Profile from './Profile'
import withAuthRedirect from '../../components/hoc/AuthRedirect'
import {compose} from 'redux'
import {SaveProfileParamsType} from '../../api/apiType'

type PropsProfileType = PropsFromRedux & RouteComponentProps<{ id: string }>

class ProfileContainer extends React.Component<PropsProfileType> {

   componentDidMount(): void {
      let id
      (!this.props.match.params.id) ? id = this.props.currentUserID : id = this.props.match.params.id
      this.props.getUserInfo(Number(id))
      this.props.getStatus(Number(id))
   }

   render() {
      return <Profile {...this.props} isOwner={!this.props.match.params.id}/>
   }
}

const mstp = (state: RootStateType) => {
   return {
      posts: state.profileData.posts,
      profileInfo: state.profileData.profileInfo,
      status: state.profileData.status,
      currentUserID: state.auth.id,
   }
}

const mdtp = {
   getUserInfo: (userID: number) => (actions.thunkGetUserInfo(userID)),
   getStatus: (userID: number) => (actions.thunkGetStatus(userID)),
   updateStatus: (status: string) => (actions.thunkUpdateStatus(status)),
   addPost: (value: string) => (actions.actionAddPost(value)),
   addLike: (id: string) => (actions.actionAddLikePost(id)),
   saveProfile: (userID: number, profileData: SaveProfileParamsType) => (actions.saveProfile(userID, profileData))
}

const connector = connect(mstp, mdtp)

type PropsFromRedux = ConnectedProps<typeof connector>

export default compose<React.ComponentType>(
   withRouter,
   connector,
   withAuthRedirect,
)(ProfileContainer)
