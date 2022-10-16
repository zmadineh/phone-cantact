import '../App.css';
import {FaHeart, FaRegHeart} from "react-icons/fa";
import ContactListDetail from "./ContactListDetail";
import {useDispatch, useSelector} from "react-redux";
import {expandContact, updateFavfContact} from "../toolkit/slices/contact.slice";

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
                    <h6 style={{fontSize: '12px', color: '#8c8c8c', marginTop: '8px'}}>{contactItem.number}</h6>
                </div>
                <div className='contactItem_favourite' onClick={() => dispatch(updateFavfContact(contactItem))}>
                    {contactItem.favourite ? <FaHeart className={'rowHeart_icon'} style={{color: 'red'}}/> : <FaRegHeart className={'rowHeart_icon'} />}
                </div>
            </div>
            <ContactListDetail id={contactItem.id} handleDelMessage={handleDelMessage} />
        </div>

    )
}

export default ContactRow;