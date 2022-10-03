import { Link } from "react-router-dom";
import {BsGrid} from "react-icons/bs";
import {FaRegEdit, FaRegTrashAlt} from "react-icons/fa";
import '../App.css'

const ContactListDetail = ({contactItem, handleDelMessage}) => {

    return (
        <div className='wrapper' style={contactItem.enable ? {height: '100%'} : {height: '1px'}}>
            <span style={{border: '1px solid #D8D8D8', width: '100%', margin: '10px 0'}}></span>
            <div className='iconContainer'>
                <Link to={`/show/${contactItem.id}`} style={{color: '#000'}}><BsGrid className={'detail_icon'}/></Link>
                <FaRegTrashAlt onClick={() => handleDelMessage(contactItem.id)} className={'detail_icon'}/>
                <Link to={`/update/${contactItem.id}`} style={{color: '#000'}}><FaRegEdit className={'detail_icon'}/></Link>
            </div>
        </div>
    )
}

export default ContactListDetail;