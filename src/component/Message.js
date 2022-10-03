import {FaCircle} from "react-icons/fa";

const Message = ({showDelMessage, handleNoDel, handleDelete}) => {

    return (
        <div style={{display: showDelMessage, alignItems: 'center', zIndex: '100'}}>
            <FaCircle style={{color: 'red', marginRight: '10px'}} />
            <p style={{color: '#525252'}}>Are you sure to delete contact?</p>
            <button className={'btn'} onClick={handleDelete}>yes</button>
            <button className={'btn'} onClick={handleNoDel}>no</button>
        </div>
    )
}

export default Message;