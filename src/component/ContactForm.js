import '../App.css';
import {FaHeart, FaRegHeart} from "react-icons/fa";

const ContactForm =  ({contact, setContact, form, setForm, formStatus, setFormStatus, lastId, setLastId, contactEnable, setContactEnable}) => {

    const handleChange = e => {
        if(e.target.name == 'favourite'){
            setForm({...form, [e.target.name]: e.target.checked})
        }
        else {
            setForm({...form, [e.target.name]: e.target.value})
        }
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
        setForm({name: '', family: '', age: '', gender: '', country: '', city: '', email: '', image: '../../public/logo512.png', favourite: false})
        setFormStatus('Add')
    }

    return (
        <div>

            <form onSubmit={handleSubmit}>
                <div className='contactForm'>
                    <img src={`https://avatars.dicebear.com/api/${form.gender || 'male'}/${lastId+1}.svg`} width={'30px'} height={'30px'}/>
                    <h4>First name</h4>
                    <input className='formName_input' onChange={handleChange} name={'name'} value={form.name} style={{marginRight: '20px'}}/>
                    <h4>Last name</h4>
                    <input className='formFamily_input' onChange={handleChange} name={'family'} value={form.family} style={{marginRight: '20px'}}/>
                    <h4>Age</h4>
                    <input className='formAge_input' onChange={handleChange} name={'age'} value={form.age} style={{marginRight: '20px'}}/>
                    <h4>Gender</h4>
                    <input className='formGender_input' onChange={handleChange} name={'gender'} value={form.gender} style={{marginRight: '20px'}}/>
                    <h4>Country</h4>
                    <input className='formCountry_input' onChange={handleChange} name={'country'} value={form.country} style={{marginRight: '20px'}}/>
                    <h4>City</h4>
                    <input className='formCity_input' onChange={handleChange} name={'city'} value={form.city} style={{marginRight: '20px'}}/>
                    <h4>Number</h4>
                    <input className='formNumber_input' onChange={handleChange} name={'number'} value={form.number} style={{marginRight: '20px'}}/>
                    <h4>Email</h4>
                    <input className='formEmail_input' onChange={handleChange} name={'email'} value={form.email} style={{marginRight: '20px'}}/>
                    <div>
                        <input type={"checkbox"} name={'favourite'} onChange={handleChange} checked={form.favourite}/>
                        {form.favourite ? <FaHeart style={{color: 'red'}}/> : <FaRegHeart /> }
                    </div>
                </div>

                <div className='formBtnContainer'>
                    <button className='formSubmit_btn' type={'submit'}>
                        {formStatus === 'Add' ? 'submit' : 'update'}
                    </button>
                </div>

            </form>
        </div>
    )
}

export default ContactForm;
