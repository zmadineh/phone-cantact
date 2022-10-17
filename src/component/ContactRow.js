import '../App.css';
import {FaHeart, FaRegHeart} from "react-icons/fa";
import ContactListDetail from "./ContactListDetail";
import {useDispatch, useSelector} from "react-redux";
import {expandContact, updateFavfContact} from "../toolkit/slices/contact.slice";
import clsx from "clsx";

const ContactRow = ({id, handleDelMessage}) => {
    const contact = useSelector((state) => state.contact.contacts);
    const contactItem = contact.filter(c => c.id === id)[0];
    const dispatch = useDispatch();

    return (
        <div key={contactItem.id} className="contactItem">
            <div className='contactContainer'>
                <div className='contactItem_image'>
                    <img src={`https://avatars.dicebear.com/api/${contactItem.gender}/${contactItem.id}.svg`} width={'30px'} height={'30px'}/>
                </div>
                <div className='contactItem_title' onClick={() => dispatch(expandContact(contactItem))}>
                    <h4>{contactItem.name} {contactItem.family}</h4>
                    <h6 className={'contact_row_number'}>{contactItem.number}</h6>
                </div>
                <div className='contactItem_favourite' onClick={() => dispatch(updateFavfContact(contactItem))}>
                    {contactItem.favourite ? <FaHeart className={clsx('rowHeart_icon', 'red_heart')} /> : <FaRegHeart className={'rowHeart_icon'} />}
                </div>
            </div>
            <ContactListDetail id={contactItem.id} handleDelMessage={handleDelMessage} />
        </div>

    )
}

export default ContactRow;