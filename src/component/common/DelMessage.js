import MessageContainer from "../MessageContainer";
import MessageText from "./MessageText";

const DelMessage = ({showDelMessage, handleNoDel, handleDelete}) => {
    return (
        <MessageContainer show={showDelMessage}>
            <MessageText color={'#ff0000'}>Are you sure to delete this contact?</MessageText>
            <button className={'btn'} onClick={handleDelete}>yes</button>
            <button className={'btn'} onClick={handleNoDel}>no</button>
        </MessageContainer>
    )
}

export default DelMessage;