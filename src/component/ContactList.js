import '../App.css';
import { useState } from "react";
import {FaHeart, FaRegEdit, FaRegHeart, FaRegTrashAlt, FaUserPlus, FaSearch, FaCircle} from "react-icons/fa";
import {BsGrid} from "react-icons/bs";


const ContactList = ({contact, setContact, setForm, setFormStatus}) => {

    const [item, setItem] = useState()
    const [searchFavEnable, setSearchFavEnable] = useState(false)

    const [filter, setFilter] = useState('allcontact')
    const [search, setSearch] = useState('')

    const [showDelMessage, setsShowDelMessage] = useState('none')
    const [delId, setDelId] = useState(0)

    const favouriteFilter = e => {
        //if(e.target.checked)  setSearchFavEnable(true)
        //else  setSearchFavEnable(false)
        setSearchFavEnable(!searchFavEnable)
    }

    const contactFilter = e => {
        setSearch(e.target.value)
    }

    const handleDelete = () => {
        setContact(contact.filter(c => c.id !== delId))
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
        setFormStatus('update')
        setForm(c)
    }

    const showDetails = id => {
        setContact(contact.map(c => c.id === id ? {...c, enable: true} : {...c, enable: false}))
    }

    const showInfo = c => {
        setFormStatus(false)
        setForm(c)
    }


return (
    <div style={{width: '100%', display: 'flex', flexDirection: "column", alignItems: 'center'}}>
        <div className='toolbar'>
            <div style={{margin: '10px', width: '30%'}}>
                {/*<label htmlFor={'search-contact'}>search contacts: </label>*/}
                <div className={'toolbar-search'}>
                    <FaSearch style={{color: '#a1a1a1', margin: '0 6px'}}/>
                    <input className='search_input' name={'search-contact'} type={"text"} onChange={contactFilter} />
                </div>

            </div>

            <h2 style={{fontSize:'25px', color: '#a1a1a1', margin: '0 10px'}}>Contacts</h2>

            <div className={'toolbarIcon-container'}>
                {/*<label htmlFor={'search-favourite'}>favourite contacts: </label>*/}
                {/*<input className='search_input' name={'search-favourite'} type={"checkbox"} onChange={favouriteFilter}/>*/}

                {searchFavEnable ? <FaHeart className={'toolbarFav_icon'} style={{color: 'red'}} onClick={favouriteFilter} /> :
                    <FaRegHeart className={'toolbarFav_icon'} style={{color: '#a1a1a1'}} onClick={favouriteFilter}/> }
                <FaUserPlus className={'toolbar-addUser'}/>
            </div>
        </div>

        <div style={{display: showDelMessage, alignItems: 'center'}}>
            <FaCircle style={{color: 'red', marginRight: '10px'}} />
            <p style={{color: '#525252'}}>Are you sure to delete contact?</p>
            <button className={'btn'} onClick={handleDelete}>yes</button>
            <button className={'btn'} onClick={handleNoDel}>no</button>
        </div>

        <div className={'contactList'}>
            { contact.filter(c =>
                ((c.name.toUpperCase().includes(search.toUpperCase())) ||
                    (c.family.toUpperCase().includes(search.toUpperCase()))) &&
                (searchFavEnable ? c.favourite : true)).map(c => (

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
                            <FaRegTrashAlt onClick={() => handleDelMessage(c.id)}/>
                            <FaRegEdit onClick={() => handleUpdate(c)}/>

                        </div>
                    </div>
                </div>
            ))}

        </div>
    </div>
)
}
//contact={searchEnable ? item : contact}
export default ContactList;
