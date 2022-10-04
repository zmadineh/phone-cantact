import '../App.css';
import React, {useEffect , useState } from "react";
import ContactList from "../component/ContactList";
import Toolbar from "../component/Toolbar";
import Sidebar from "../component/sidebar/Sidebar";

const HomePage = ({contact, setContact}) => {

    const [lastId, setLastId] = useState(contact[contact.length-1].id)
    const [form, setForm] = useState( {id:lastId+1, name: '', family: '', age: '', gender: 'female', country: '', city: '', number:'', email: '', image: '', favourite: false})
    const [formStatus, setFormStatus] = useState('Add')
    const [searchFavEnable, setSearchFavEnable] = useState(false)
    const [search, setSearch] = useState('')
    const [showForm, setShowForm] = useState(false)


    const favouriteFilter = e => {
        setSearchFavEnable(!searchFavEnable)
    }

    const contactFilter = e => {
        setSearch(e.target.value)
    }

    const disableWrapper = () => {
        setContact(contact.map( item => ({...item, enable : false}) ));
    }

    return (
        <div className='center'>
            <div className={'overlay'} onClick={disableWrapper}></div>
            <div className='main'>

                <Toolbar filter={contactFilter}
                         favouriteFilter={favouriteFilter}
                         searchFavEnable={searchFavEnable}
                         setForm={setForm}
                         setFormStatus={setFormStatus}
                         lastId={lastId}
                         setShowForm={setShowForm}/>

                <ContactList contact={contact}
                             setContact={setContact}
                             form={form}
                             setForm={setForm}
                             formStatus={formStatus}
                             setFormStatus={setFormStatus}
                             lastId={lastId}
                             setLastId={setLastId}
                             search={search}
                             searchFavEnable={searchFavEnable}
                             setShowForm={setShowForm}/>

                {/*<Sidebar />*/}

            </div>
        </div>
    );
}

export default HomePage;
