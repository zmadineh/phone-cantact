import {FaCircle} from "react-icons/fa";

const MessageText = (props) => {

    return (
        <div style={{display: "flex", alignItems: 'center', margin: '0 10px'}}>
            <FaCircle style={{color: props.color, marginRight: '10px'}} />
            <p style={{color: '#525252'}}>{props.children}</p>
        </div>
    )
}

export default MessageText;