import { Link } from "react-router-dom";
import {BsGrid} from "react-icons/bs";
import {FaRegEdit, FaRegTrashAlt} from "react-icons/fa";
import '../App.css'
import {useDispatch, useSelector} from "react-redux";

const ContactListDetail = ({id, handleDelMessage}) => {
    const contact = useSelector((state) => state.contact.contacts);
    const contactItem = contact.filter(c => c.id === id)[0];

    return (
        <div className='wrapper' style={contactItem.enable ? {height: '100%'} : {height: '1px'}}>
            <span style={{border: '1px solid #D8D8D8', width: '100%', margin: '10px 0'}}></span>
            <div className='iconContainer'>
                <Link to={`/Show/${contactItem.id}`} style={{color: '#000'}}><BsGrid className={'detail_icon'}/></Link>
                <FaRegTrashAlt onClick={() => handleDelMessage(contactItem.id)} className={'detail_icon'}/>
                <Link to={`/Update/${contactItem.id}`} style={{color: '#000'}}><FaRegEdit className={'detail_icon'}/></Link>
            </div>
        </div>
    )
}

export default ContactListDetail;