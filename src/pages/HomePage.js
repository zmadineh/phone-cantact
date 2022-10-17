import '../App.css';
import React, {useEffect , useState } from "react";
import ContactList from "../component/ContactList";
import Toolbar from "../component/Toolbar";
import Sidebar from "../component/sidebar/Sidebar";
import {useDispatch, useSelector} from "react-redux";
import {collapseContact} from "../toolkit/slices/contact.slice";
import {emptyForm} from "../data/emptyForm";

const HomePage = () => {

    const contact = useSelector((state) => state.contact.contacts);
    const dispatch = useDispatch();

    const [lastId, setLastId] = useState(contact[contact.length-1].id)
    const [form, setForm] = useState( {id:lastId+1, ...emptyForm})
    const [formStatus, setFormStatus] = useState('Add')
    const [searchFavEnable, setSearchFavEnable] = useState(false)
    const [search, setSearch] = useState('')


    const favouriteFilter = e => {
        setSearchFavEnable(!searchFavEnable)
    }

    const contactFilter = e => {
        setSearch(e.target.value)
    }

    const disableWrapper = () => {
        dispatch(collapseContact());
    }

    return (
        <div className='center'>
            <div className={'overlay'} onClick={disableWrapper}></div>
            <div className='main'>

                <Toolbar contactFilter={contactFilter}
                         favouriteFilter={favouriteFilter}
                         searchFavEnable={searchFavEnable}
                         setForm={setForm}
                         setFormStatus={setFormStatus}
                         lastId={lastId} />

                <ContactList search={search}
                             searchFavEnable={searchFavEnable} />

                {/*<Sidebar />*/}

            </div>
        </div>
    );
}

export default HomePage;
