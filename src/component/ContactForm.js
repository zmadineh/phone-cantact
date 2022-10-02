import '../App.css';
import {FaHeart, FaRegHeart} from "react-icons/fa";
import {AiOutlineClose} from "react-icons/ai";
import FormInput from './FormInput.js';

const formInputs = [
    {id: 1, title: 'First Name', name: 'name'},
    {id: 2, title: 'Last Name', name: 'family'},
    {id: 3, title: 'Age', name: 'age'},
    {id: 4, title: 'Gender', name: 'gender'},
    {id: 5, title: 'Country', name: 'country'},
    {id: 6, title: 'City', name: 'city'},
    {id: 7, title: 'Number', name: 'number'},
    {id: 8, title: 'Email', name: 'email'},
]

const ContactForm =  ({contact, setContact, form, setForm, formStatus, setFormStatus, lastId, setLastId, showForm, setShowForm}) => {

    const handleChange = e => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const handleFavChange = () => {
        setForm({...form, ['favourite']: !form.favourite})
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log(e)
        if (formStatus === 'Add'){
            if (form.name == '' || form.family == '' || form.email == '' || form.number == '')
                alert('Enter inputs')
            else {
                setContact([...contact, {
                    id: lastId + 1,
                    name: form.name,
                    family: form.family,
                    age: form.age,
                    gender: form.gender,
                    country: form.country,
                    city: form.city,
                    number: form.number,
                    email: form.email,
                    favourite: form.favourite,
                    image: form.image,
                }])
                setLastId(lastId + 1)
                setShowForm(false)
            }
        }
        else {
            setContact(contact.map(c => c.id === form.id ? form : c))
            setShowForm(false)
        }
        setForm({id: lastId+1, name: '', family: '', age: '', gender: 'female', country: '', city: '', number:'', email: '', image: '', favourite: false})
        setFormStatus('Add')

    }

    const closeForm = () => {
        setShowForm(false)
    }

    return (
        <div style={showForm ? {display: 'block'} : {display: 'none'}}>

            <form onSubmit={handleSubmit}>
                <div className='contactForm'>
                    <div className={'form_img'}>
                        <img src={`https://avatars.dicebear.com/api/${form.gender}/${form.id}.svg`}/>
                        {form.favourite ? <FaHeart className={'formFav_icon'} style={{color: 'red'}} name={'favourite'} onClick={formStatus !== 'Show' ? handleFavChange : () => {}} /> :
                            <FaRegHeart className={'formFav_icon'} style={{color: '#a1a1a1'}} name={'favourite'} onClick={formStatus !== 'Show' ? handleFavChange : () => {}}/> }
                    </div>

                    <div className={'formInput-container'}>
                        {formInputs.map(input => (
                            <FormInput input={input} handleChange={handleChange} form={form} formStatus={formStatus}/>
                        ))}
                    </div>
                </div>

                <div className='formBtn-container'>
                    <button className={'btn'} onClick={closeForm} type={'button'}>Close</button>
                    <button className={'btn'} style={ formStatus !== 'Show' ? {} : {display: 'none'}} type={'submit'}>
                        {formStatus === 'Add' ? 'Add' : 'Update'}
                    </button>
                    {/*<button className={'close_btn'} onClick={closeForm}> <AiOutlineClose /></button>*/}
                </div>

            </form>
        </div>
    )
}

export default ContactForm;
