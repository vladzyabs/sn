import {actionAddMessage, actionInputNewMessage} from "../../redux/reducers/dialogsReduser";
import Messages from "./Messages";
import {connect} from "react-redux";
import {DispatchType, RootStateType} from "../../redux/StoreTypes";

const mapStateToProps = (state: RootStateType) => {
    return {
        messages: state.dialogsData.messages,
        newMessage: state.dialogsData.newMessage,
    }
};
const mapDispatchToProps = (dispatch: DispatchType) => {
    return {
        addMessage: () => {
            let action = actionAddMessage();
            dispatch(action)
        },
        inputNewMessage: (value: string) => {
            let action = actionInputNewMessage(value);
            dispatch(action)
        }
    }
};
const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer