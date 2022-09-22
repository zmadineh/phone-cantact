import '../App.css';
import {FaHeart, FaRegHeart} from "react-icons/fa";

const ContactForm =  ({contact, setContact, form, setForm, formStatus, setFormStatus, lastId, setLastId}) => {

    const handleChange = e => {
        if(e.target.name == 'favourite'){
            setForm({...form, [e.target.name]: e.target.checked})

        }
        else {
            setForm({...form, [e.target.name]: e.target.value})
        }
    }

    const handleFavChange = () => {
        setForm({...form, ['favourite']: !form.favourite})
    }

    const handleSubmit = e => {
        e.preventDefault()
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
            }
        }
        else {
            setContact(contact.map(c => c.id === form.id ? form: c))
        }
        setForm({name: '', family: '', age: '', gender: '', country: '', city: '', number:'', email: '', image: '', favourite: false})
        setFormStatus('Add')
    }

    return (
        <div>

            <form onSubmit={handleSubmit}>
                <div className='contactForm'>
                    <div className={'form_img'}>
                        <img src={`https://avatars.dicebear.com/api/${form.gender || 'male'}/${lastId+1}.svg`}/>

                        {form.favourite ? <FaHeart className={'formFav_icon'} style={{color: 'red'}} name={'favourite'} onClick={handleFavChange } /> :
                            <FaRegHeart className={'formFav_icon'} style={{color: '#a1a1a1'}} name={'favourite'} onClick={handleFavChange}/> }
                    </div>

                    <div className={'formInput-container'}>
                        <div>
                            <h4>First name</h4>
                            <input className='form_input' onChange={handleChange} name={'name'} value={form.name} style={{marginRight: '20px'}}/>
                        </div>
                        <div>
                            <h4>Last name</h4>
                            <input className='form_input' onChange={handleChange} name={'family'} value={form.family} style={{marginRight: '20px'}}/>
                        </div>
                        <div>
                            <h4>Age</h4>
                            <input className='form_input' onChange={handleChange} name={'age'} value={form.age} style={{marginRight: '20px'}}/>
                        </div>
                        <div>
                            <h4>Gender</h4>
                            <input className='form_input' onChange={handleChange} name={'gender'} value={form.gender} style={{marginRight: '20px'}}/>
                        </div>
                        <div>
                            <h4>Country</h4>
                            <input className='form_input' onChange={handleChange} name={'country'} value={form.country} style={{marginRight: '20px'}}/>
                        </div>
                        <div>
                            <h4>City</h4>
                            <input className='form_input' onChange={handleChange} name={'city'} value={form.city} style={{marginRight: '20px'}}/>
                        </div>
                        <div>
                            <h4>Number</h4>
                            <input className='form_input' onChange={handleChange} name={'number'} value={form.number} style={{marginRight: '20px'}}/>
                        </div>
                        <div>
                            <h4>Email</h4>
                            <input className='form_input' onChange={handleChange} name={'email'} value={form.email} style={{marginRight: '20px'}}/>
                        </div>
                    </div>

                </div>

                <div className='formBtn-container' style={ formStatus ? {} : {display: 'none'}}>
                    <button className={'btn'} type={'submit'}>
                        {formStatus === 'Add' ? 'Add' : 'update'}
                    </button>
                </div>

            </form>
        </div>
    )
}

export default ContactForm;
