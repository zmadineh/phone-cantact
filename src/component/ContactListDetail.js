import {BsGrid} from "react-icons/bs";
import {FaRegEdit, FaRegTrashAlt} from "react-icons/fa";
import '../App.css'

const ContactListDetail = ({c, handleDelMessage, handleUpdate, showInfo}) => {

    return (
        <div className='wrapper' style={c.enable ? {height: '100%'} : {height: '1px'}}>
            <span style={{border: '1px solid #D8D8D8', width: '100%', margin: '10px 0'}}></span>
            <div className='iconContainer'>
                <BsGrid onClick={() => showInfo(c)}/>
                <FaRegTrashAlt onClick={() => handleDelMessage(c.id)}/>
                <FaRegEdit onClick={() => handleUpdate(c)}/>
            </div>
        </div>
    )
}

export default ContactListDetail;