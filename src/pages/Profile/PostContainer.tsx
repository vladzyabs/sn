import {DispatchType, RootStateType} from "../../redux/StoreTypes";
import {connect} from "react-redux";
import {actionAddPost, actionInputNewPost} from "../../redux/reducers/profileReducer";
import Post from "./Post";

const mapStateToProps = (state: RootStateType) => {
    return {
        posts: state.profileData.posts,
        newPosts: state.profileData.newPosts,
    }
};
const mapDispatchToProps = (dispatch: DispatchType) => {
    return {
        addPost: () => {
            let action = actionAddPost();
            dispatch(action);
        },
        inputNewPost: (value: string) => {
            let action = actionInputNewPost(value);
            dispatch(action);
        }
    }
};

connect(mapStateToProps, mapDispatchToProps)(Post)

export default Post