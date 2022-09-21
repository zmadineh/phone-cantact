import '../App.css';
import { useState } from "react";
import Contact from "./contact";
import {FaHeart, FaRegEdit, FaRegHeart, FaRegTrashAlt} from "react-icons/fa";
import {BsGrid} from "react-icons/bs";


const ContactList = ({contact, setContact, form, setForm, formStatus, setFormStatus, lastId, setLastId, contactEnable, setContactEnable}) => {

    const [item, setItem] = useState()
    const [searchEnable, setSearchEnable] = useState(false)

    const [filter, setFilter] = useState('allcontact')
    const [search, setSearch] = useState('')

    const favouriteFilter = e => {
        if(e.target.checked){
            setItem(contact.filter(c => c.favourite === true))
            setSearchEnable(true)
        }
        else {
            setSearchEnable(false)
        }
    }

    const contactFilter = e => {
        setSearch(e.target.value)
    }

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
            <div className='toolbar'>
                <label htmlFor={'search-favourite'}>favourite contacts: </label>
                <input className='search_input' name={'search-favourite'} type={"checkbox"} onChange={favouriteFilter}/>
                <br/>
                <label htmlFor={'search-contact'}>search contacts: </label>
                <input className='search_input' name={'search-contact'} type={"text"} onChange={contactFilter}/>
            </div>

            <div>
                <div className='contactList'>
                    { (searchEnable? contact:item).filter(c => (c.name.toUpperCase().includes(search.toUpperCase())) || (c.family.toUpperCase().includes(search.toUpperCase())) ).map(c => (
                        <div className="contactItem">
                            <div className='contactContainer'>
                                <div className='contactItem_image'>
                                    <img src={`https://avatars.dicebear.com/api/${c.gender}/${c.id}.svg`} width={'30px'} height={'30px'}/>
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
        </div>
    )
}
//contact={searchEnable ? item : contact}
export default ContactList;
