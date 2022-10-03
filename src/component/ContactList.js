import '../App.css';
import { useState } from "react";
import Message from "./Message";
import ContactRow from "./ContactRow";


const ContactList = ({contact, setContact, search, searchFavEnable}) => {

    const [showDelMessage, setsShowDelMessage] = useState('none')
    const [delId, setDelId] = useState(0)

    const handleDelete = () => {
        setContact(contact.filter(c => c.id !== delId))
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

    const handleFavourite = id => {
        setContact(contact.map(c => c.id === id ? {...c, favourite: !c.favourite} : c))
    }

    const showDetails = id => {
        setContact(contact.map(c => c.id === id ? {...c, enable: true} : {...c, enable: false}))
    }

    return (
        <div style={{width: '100%', display: 'flex', flexDirection: "column", alignItems: 'center'}}>

            <Message handleDelete={handleDelete} handleNoDel={handleNoDel} showDelMessage={showDelMessage} />

            <div className={'contactList'}>
                { contact.filter(contactItem => ((contactItem.name.toUpperCase().includes(search.toUpperCase())) || (contactItem.family.toUpperCase().includes(search.toUpperCase()))) &&
                    (searchFavEnable ? contactItem.favourite : true)).map(contactItem => (
                        <ContactRow contactItem={contactItem} handleFavourite={handleFavourite} showDetails={showDetails} handleDelMessage={handleDelMessage}/>
                ))}
            </div>
        </div>
    )
}

export default ContactList;
