import {
    actionAddPost,
    actionInputNewPost,
} from "../../redux/reducers/profileReducer";
import {DispatchType, RootStateType} from "../../redux/StoreTypes";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

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
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer