import MessageContainer from "./MessageContainer";
import MessageText from "./MessageText";

const SuccessMessage = ({showSuccessMessage, text}) => {
   // console.log(showSuccessMessage)
    return (
        <MessageContainer show={showSuccessMessage}>
            <MessageText color={'#22ff00'}>{`${text} successfuly :)`}</MessageText>
        </MessageContainer>
    )
}

export default SuccessMessage;