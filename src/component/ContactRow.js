import '../App.css';
import {FaHeart, FaRegHeart} from "react-icons/fa";
import ContactListDetail from "./ContactListDetail";

const ContactRow = ({contactItem, showDetails, handleFavourite, handleDelMessage}) => {
    return (

        <div key={contactItem.id} className="contactItem">
            <div className='contactContainer'>
                <div className='contactItem_image'>
                    <img src={`https://avatars.dicebear.com/api/${contactItem.gender}/${contactItem.id}.svg`} width={'30px'} height={'30px'}/>
                </div>
                <div className='contactItem_title' onClick={() => showDetails(contactItem.id)}>
                    <h4>{contactItem.name} {contactItem.family}</h4>
                    <h6 style={{fontSize: '12px', color: '#8c8c8c', marginTop: '8px'}}>{contactItem.number}</h6>
                </div>
                <div className='contactItem_favourite' onClick={() => handleFavourite(contactItem.id)}>
                    {contactItem.favourite ? <FaHeart className={'rowHeart_icon'} style={{color: 'red'}}/> : <FaRegHeart className={'rowHeart_icon'} />}
                </div>
            </div>
            <ContactListDetail contactItem={contactItem} handleDelMessage={handleDelMessage} />
        </div>

    )
}

export default ContactRow;