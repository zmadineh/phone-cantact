import '../App.css';
import { Link, useParams } from "react-router-dom";
import {useEffect, useState} from "react";
import {FaHeart, FaRegHeart} from "react-icons/fa";
import FormInput from './FormInput.js';
import {formInputsName} from '../data/formInputsName';


const FormTemplate =  ({contact, setContact, formStatus}) => {

    const {id} = useParams();

    const [lastId, setLastId] = useState(contact[contact.length-1].id)
    const [form, setForm] = useState( {id:lastId+1, name: '', family: '', age: '', gender: 'female', country: '', city: '', number:'', email: '', image: '', favourite: false})

    useEffect(() => {
        if (formStatus === 'Update'|| formStatus === 'Show')
            setForm(contact.filter(item => item.id === Number(id))[0])
    }, [])

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
            if (form.name === '' || form.family === '' || form.email === '' || form.number === '')
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
            setContact(contact.map(c => c.id === form.id ? form : c))
        }
    }

    return (
        <div className={'center'}>
            <div className={'main'}>
                <form onSubmit={handleSubmit}>
                    <div className='contactForm'>
                        <div className={'form_img'}>
                            <img src={`https://avatars.dicebear.com/api/${form.gender}/${form.id}.svg`}/>
                            {form.favourite ? <FaHeart className={'formFav_icon'} style={{color: 'red'}} name={'favourite'} onClick={formStatus !== 'Show' ? handleFavChange : () => {}} /> :
                                <FaRegHeart className={'formFav_icon'} style={{color: '#a1a1a1'}} name={'favourite'} onClick={formStatus !== 'Show' ? handleFavChange : () => {}}/> }
                        </div>

                        <div className={'formInput-container'}>
                            {formInputsName.map(input => (
                                <FormInput input={input} handleChange={handleChange} form={form} formStatus={formStatus}/>
                            ))}
                        </div>
                    </div>

                    <div className='formBtn-container'>
                        <Link to={'/'}><button className={'btn'} type={'button'}>Close</button></Link>
                        <button className={'btn'} style={ formStatus !== 'Show' ? {} : {display: 'none'}} type={'submit'}>
                            {formStatus === 'Add' ? 'Add' : 'Update'}
                        </button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default FormTemplate;
