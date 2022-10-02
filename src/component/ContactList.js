import '../App.css';
import { useState } from "react";
import {FaHeart, FaRegHeart} from "react-icons/fa";
import Toolbar from "./Toolbar";
import Message from "./Message";
import ContactListDetail from "./ContactListDetail";


const ContactList = ({contact, setContact, setForm, setFormStatus, search, searchFavEnable, setShowForm}) => {

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

    const handleUpdate = c => {
        setShowForm(true)
        setFormStatus('Update')
        setForm(c)
    }

    const showDetails = id => {
        setContact(contact.map(c => c.id === id ? {...c, enable: true} : {...c, enable: false}))
    }

    const showInfo = c => {
        setShowForm(true)
        setFormStatus('Show')
        setForm(c)
    }

    return (
        <div style={{width: '100%', display: 'flex', flexDirection: "column", alignItems: 'center'}}>

            <Message handleDelete={handleDelete} handleNoDel={handleNoDel} showDelMessage={showDelMessage} />

            <div className={'contactList'}>
                { contact.filter(c => ((c.name.toUpperCase().includes(search.toUpperCase())) || (c.family.toUpperCase().includes(search.toUpperCase()))) &&
                    (searchFavEnable ? c.favourite : true)).map(c => (

                    <div className="contactItem">
                        <div className='contactContainer'>
                            <div className='contactItem_image'>
                                <img src={`https://avatars.dicebear.com/api/${c.gender}/${c.id}.svg`} width={'30px'} height={'30px'}/>
                            </div>
                            <div className='contactItem_title' onClick={() => showDetails(c.id)}>
                                <h4>{c.name} {c.family}</h4>
                                <h6 style={{fontSize: '12px', color: '#8c8c8c', marginTop: '8px'}}>{c.number}</h6>
                            </div>
                            <div className='contactItem_favourite' onClick={() => handleFavourite(c.id)}>
                                {c.favourite ? <FaHeart style={{color: 'red'}}/> : <FaRegHeart />}
                            </div>
                        </div>

                        <ContactListDetail c={c} handleDelMessage={handleDelMessage} handleUpdate={handleUpdate} showInfo={showInfo}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ContactList;
