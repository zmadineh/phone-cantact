import './App.css';
import React from "react";
import { useState } from "react";
import ContactList from "./component/ContactList";
import ContactForm from "./component/ContactForm";
import ContactInfo from "./component/ContactInfo";

function App() {

  const [contact, setContact] = useState( [
    {id: 1, name: 'zahra', family: 'madineh', age: '25', gender: 'female', country: 'iran', city: 'isfahan', number:'091111111', email:'zmadineh@gmail.com', image: `https://avatars.dicebear.com/api/female/1.svg`, favourite: false, enable: false},
    {id: 2, name: 'mahdi', family: 'madineh', age: '25', gender: 'male', country: 'iran', city: 'isfahan', number:'091111111', email:'zmadineh@gmail.com', image: `https://avatars.dicebear.com/api/male/2.svg`, favourite: false, enable: false},
    {id: 3, name: 'ali', family: 'madineh', age: '25', gender: 'male', country: 'iran', city: 'isfahan', number:'091111111', email:'zmadineh@gmail.com', image: `https://avatars.dicebear.com/api/male/3.svg`, favourite: false, enable: false},
  ])

  const [form, setForm] = useState( {name: '', family: '', age: '', gender: '', country: '', city: '', number:'', email: '', image: '../../public/logo512.png', favourite: false})
  const [formStatus, setFormStatus] = useState('Add')
  const [lastId, setLastId] = useState(contact[contact.length-1].id)
  const [contactEnable, setContactEnable] = useState(false)



  return (
    <div className='center'>
        <div className='main'>
            <div className='header'>
                <h1 style={{margin: '20px'}}>Contacts</h1>
            </div>

            <ContactList contact={contact} setContact={setContact} form={form} setForm={setForm} formStatus={formStatus} setFormStatus={setFormStatus} lastId={lastId} setLastId={setLastId} contactEnable={contactEnable} setContactEnable={setContactEnable}/>
            <ContactForm contact={contact} setContact={setContact} form={form} setForm={setForm} formStatus={formStatus} setFormStatus={setFormStatus} lastId={lastId} setLastId={setLastId} contactEnable={contactEnable} setContactEnable={setContactEnable}/>

            <ContactInfo contact={contact} setContact={setContact} form={form} formStatus={formStatus} lastId={lastId}/>

        </div>
    </div>
  );
}

export default App;
