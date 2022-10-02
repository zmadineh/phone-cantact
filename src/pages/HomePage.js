import '../App.css';
import React, {useEffect , useState } from "react";
import ContactList from "../component/ContactList";
import ContactForm from "../component/ContactForm";
import Toolbar from "../component/Toolbar";

const HomePage = () => {

    const [contact, setContact] = useState( [
        {id: 1, name: 'Zahra', family: 'Madineh', age: '25', gender: 'female', country: 'iran', city: 'isfahan', number:'091111111', email:'zahra@gmail.com', image: `https://avatars.dicebear.com/api/female/1.svg`, favourite: false, enable: false},
        {id: 2, name: 'Mahdi', family: 'Madineh', age: '25', gender: 'male', country: 'iran', city: 'isfahan', number:'092222222', email:'mahdi@gmail.com', image: `https://avatars.dicebear.com/api/male/2.svg`, favourite: false, enable: false},
        {id: 3, name: 'Ali', family: 'Madineh', age: '25', gender: 'male', country: 'iran', city: 'isfahan', number:'093333333', email:'ali@gmail.com', image: `https://avatars.dicebear.com/api/male/3.svg`, favourite: false, enable: false},
    ])

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

    useEffect( () => {
        console.log(showForm)
    }, [showForm])

    return (
        <div className='center'>
            <div className='main'>

                <Toolbar contactFilter={contactFilter}
                         favouriteFilter={favouriteFilter}
                         searchFavEnable={searchFavEnable}
                         setForm={setForm}
                         setFormStatus={setFormStatus}
                         lastId={lastId}
                         setShowForm={setShowForm}/>

                <ContactList contact={contact}
                             setContact={setContact}
                             setForm={setForm}
                             setFormStatus={setFormStatus}
                             search={search}
                             searchFavEnable={searchFavEnable}
                             setShowForm={setShowForm}/>

                <ContactForm contact={contact}
                             setContact={setContact}
                             form={form}
                             setForm={setForm}
                             formStatus={formStatus}
                             setFormStatus={setFormStatus}
                             lastId={lastId}
                             setLastId={setLastId}
                             showForm={showForm}
                             setShowForm={setShowForm}/>

            </div>
        </div>
    );
}

export default HomePage;
