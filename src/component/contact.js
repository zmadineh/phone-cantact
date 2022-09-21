import '../App.css';
import { useState } from "react";
import { FaHeart, FaRegHeart, FaRegTrashAlt, FaRegEdit } from "react-icons/fa";
import { BsGrid } from "react-icons/bs";

const filter = [
    {id: 1, type: 'allContact'},
    {id: 2, type: 'favContact'},
    {id: 3, type: 'unFavContact'}
]

const Contact = ({contact, setContact, form, setForm, formStatus, setFormStatus, lastId, setLastId, contactEnable, setContactEnable, search}) => {

    const handleDelete = id => {
        setContact(contact.filter(c => c.id !== id))
    }

    const handleFavourite = id => {
        setContact(contact.map(c => c.id === id ? {...c, favourite: !c.favourite} : c))
    }

    const handleUpdate = c => {

        setFormStatus('update')
        setForm(c)
    }

    const showDetails = id => {
        setContact(contact.map(c => c.id === id ? {...c, enable: true} : {...c, enable: false}))
    }

    const showInfo = c => {

    }

    return (
        <div>
            <div className='contactList'>
                { contact.filter(c => (c.name.toUpperCase().includes(search.toUpperCase())) || (c.family.toUpperCase().includes(search.toUpperCase()))).map(c => (
                    <div className="contactItem">
                        <div className='contactContainer'>
                            <div className='contactItem_image'>
                                <img src={`https://avatars.dicebear.com/api/${c.gender}/:${c.id}.svg`} width={'30px'} height={'30px'}/>
                            </div>
                            <div className='contactItem_title' onClick={() => showDetails(c.id)}>
                                <h4>{c.name} {c.family}</h4>
                            </div>
                            <div className='contactItem_favourite' onClick={() => handleFavourite(c.id)}>
                                {c.favourite ? <FaHeart style={{color: 'red'}}/> : <FaRegHeart />}
                            </div>
                        </div>

                        <div className='wrapper' style={c.enable ? {height: '100%'} : {height: '1px'}}>
                            <span style={{border: '1px solid #D8D8D8', width: '100%', margin: '10px 0'}}></span>
                            <div className='iconContainer'>
                                <BsGrid onClick={() => showInfo(c)}/>
                                <FaRegTrashAlt onClick={() => handleDelete(c.id)}/>
                                <FaRegEdit onClick={() => handleUpdate(c)}/>

                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default Contact;
