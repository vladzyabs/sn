import React from "react";
import {RouteComponentProps, withRouter} from 'react-router';
import {RootStateType} from "../../redux/rootStore";
import * as actions from "../../redux/profilePage/profileAction";
import {connect, ConnectedProps} from "react-redux";
import Profile from "./Profile";
import * as axios from "axios";

type PropsProfileType = PropsFromRedux & RouteComponentProps<{ id: string }>
    & {}

class ProfileContainer extends React.Component<PropsProfileType> {

    componentDidMount(): void {
        let id
        (!this.props.match.params.id) ? id = 2 : id = this.props.match.params.id
        axios.default(`https://social-network.samuraijs.com/api/1.0/profile/${id}`)
            .then(response => this.props.setUserInfo(response.data))
    }

    render() {
        return <Profile {...this.props}/>
    }
}

const mstp = (state: RootStateType) => {
    return {
        posts: state.profileData.posts,
        newPosts: state.profileData.newPosts,
        profileInfo: state.profileData.profileInfo,
    }
}

const mdtp = {
    setUserInfo: (info: any) => (actions.actionSetUserInfo(info)),
    addPost: () => (actions.actionAddPost()),
    inputNewPost: (value: string) => (actions.actionInputNewPost(value)),
    addLike: (id: string) => (actions.actionAddLikePost(id))
}

const connector = connect(mstp, mdtp)

type PropsFromRedux = ConnectedProps<typeof connector>

export default withRouter(connector(ProfileContainer))
