import '../App.css';
import { useState } from "react";
import Contact from "./contact";

const ContactList = ({contact, setContact, form, setForm, formStatus, setFormStatus, lastId, setLastId, contactEnable, setContactEnable}) => {

    const [item, setItem] = useState()
    const [searchEnable, setSearchEnable] = useState(false)

    const onlyUnique = (value, index, array) => {
        return array.indexOf(value) === index;
    }

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
        setItem([...contact.filter(c => c.name.includes(e.target.value)), ...contact.filter(c => c.family.includes(e.target.value))].filter(onlyUnique))
        setSearchEnable(true)
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

            <Contact contact={searchEnable ? item : contact} setContact={setContact} form={form} setForm={setForm} formStatus={formStatus} setFormStatus={setFormStatus} lastId={lastId} setLastId={setLastId} contactEnable={contactEnable} setContactEnable={setContactEnable}/>

        </div>
    )
}

export default ContactList;
