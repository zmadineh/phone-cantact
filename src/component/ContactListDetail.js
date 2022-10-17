import { Link } from "react-router-dom";
import {BsGrid} from "react-icons/bs";
import {FaRegEdit, FaRegTrashAlt} from "react-icons/fa";
import '../App.css'
import {useDispatch, useSelector} from "react-redux";
import clsx from "clsx";

const ContactListDetail = ({id, handleDelMessage}) => {
    const contact = useSelector((state) => state.contact.contacts);
    const contactItem = contact.filter(c => c.id === id)[0];

    return (
        <div className={clsx('wrapper', contactItem.enable && 'max_height', !contactItem.enable && 'min_height')}>
            <span className={'detail_line'}></span>
            <div className='iconContainer'>
                <Link to={`/Show/${contactItem.id}`} className={'black_color'} ><BsGrid className={'detail_icon'}/></Link>
                <FaRegTrashAlt onClick={() => handleDelMessage(contactItem.id)} className={'detail_icon'}/>
                <Link to={`/Update/${contactItem.id}`} className={'black_color'} ><FaRegEdit className={'detail_icon'}/></Link>
            </div>
        </div>
    )
}

export default ContactListDetail;