import {FaCircle} from "react-icons/fa";

const MessageText = (props) => {

    return (
        <div className={'message_text_container'}>
            <FaCircle style={{color: props.color, marginRight: '10px'}} />
            <p style={{color: '#525252'}}>{props.children}</p>
        </div>
    )
}

export default MessageText;