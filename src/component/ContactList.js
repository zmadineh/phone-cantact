import '../App.css';
import { useState } from "react";
import DelMessage from "./DelMessage";
import ContactRow from "./ContactRow";
import {useDispatch} from "react-redux";
import {removeContact} from "../toolkit/slices/contact.slice";
import {useSelector} from "react-redux";


const ContactList = ({search, searchFavEnable}) => {

    const contact = useSelector((state) => state.contact.contacts);
    const dispatch = useDispatch();

    const [showDelMessage, setsShowDelMessage] = useState('none');
    const [delId, setDelId] = useState(0);

    const handleDelete = () => {
        dispatch(removeContact(contact.filter(c => c.id === delId)[0]));
        handleNoDel()
    }

    const handleDelMessage = id => {
        setsShowDelMessage('flex')
        setDelId(id)
    }

    const handleNoDel = () => {
        setsShowDelMessage('none')
        setDelId(0)
    }

    return (
        <div style={{width: '100%', display: 'flex', flexDirection: "column", alignItems: 'center'}}>

            <DelMessage handleDelete={handleDelete} handleNoDel={handleNoDel} showDelMessage={showDelMessage} />

            <div className={'contactList'}>
                { contact.filter(contactItem => ((contactItem.name.toUpperCase().includes(search.toUpperCase())) || (contactItem.family.toUpperCase().includes(search.toUpperCase()))) &&
                    (searchFavEnable ? contactItem.favourite : true)).map(contactItem => (
                        <ContactRow key={contactItem.id} id={contactItem.id} handleDelMessage={handleDelMessage}/>
                ))}
            </div>
        </div>
    )
}

export default ContactList;
