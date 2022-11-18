import '../App.css';
import { Link, useParams } from "react-router-dom";
import {useEffect, useState} from "react";
import {FaHeart, FaRegHeart} from "react-icons/fa";
import FormInput from './FormInput.js';
import {formInputsName} from '../data/formInputsName';
import SuccessMessage from './common/SuccessMessage';
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import {addContact, removeContact} from "../toolkit/slices/contact.slice";
import {updateContact} from "../toolkit/slices/contact.slice";
import {emptyForm} from "../data/emptyForm";
import clsx from "clsx";

const FormTemplate =  () => {

    const {id} = useParams();
    const {formStatus} = useParams();

    const contact = useSelector((state) => state.contact.contacts);
    const dispatch = useDispatch();

    const lastID = contact.length !== 0 ? contact[contact.length-1].id : 0;
    const [lastId, setLastId] = useState(lastID)
    const [form, setForm] = useState( {id:lastId+1, ...emptyForm})
    const [showSuccessMessage, setShowSuccessMessage] = useState('none')

    useEffect(() => {
        if (formStatus === 'Update'|| formStatus === 'Show')
            setForm(contact.filter(item => item.id === Number(id))[0])
        if (formStatus === 'Remove')
            dispatch(removeContact(contact.filter(item => item.id === Number(id))[0]))
    }, [])

    const handleChange = e => {
        setShowSuccessMessage('none')
        setForm({...form, [e.target.name]: e.target.value})
    }

    const handleFavChange = () => {
        setShowSuccessMessage('none')
        setForm({...form, ['favourite']: !form.favourite})
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log(e)
        if (formStatus === 'Add'){
            if (form.name === '' || form.family === '' || form.email === '' || form.number === '')
                alert('Enter inputs')
            else {
                const newContact = {
                    id: lastId+1,
                    ...form,
                    enable: false,
                };
                console.log(newContact)
                dispatch(addContact(newContact))
                setLastId(lastId + 1)
                setShowSuccessMessage('flex')
            }
        }
        else {
            dispatch(updateContact(form))
            setShowSuccessMessage('flex')
        }
    }

    return (
        <div className={'center'}>
            <div className={'main'}>

                <div style={{marginTop: '30px'}}>
                    <SuccessMessage showSuccessMessage={showSuccessMessage} text={formStatus} />
                </div>
                <form onSubmit={handleSubmit}>
                    <div className='contactForm'>
                        <div className={'form_img'}>
                            <img src={`https://avatars.dicebear.com/api/${form.gender}/${form.id}.svg`}/>
                            {form.favourite ? <FaHeart className={clsx('formFav_icon', 'red_heart')} name={'favourite'} onClick={formStatus !== 'Show' ? handleFavChange : () => {}} /> :
                                <FaRegHeart className={clsx('formFav_icon', 'gray_heart')} name={'favourite'} onClick={formStatus !== 'Show' ? handleFavChange : () => {}}/> }
                        </div>

                        <div className={'formInput-container'}>
                            {formInputsName.map(input => (
                                <FormInput key={input.id} input={input} handleChange={handleChange} form={form} formStatus={formStatus}/>
                            ))}
                        </div>
                    </div>

                    <div className='formBtn-container'>
                        <Link to={'/'}><button className={'btn'} type={'button'}>Close</button></Link>
                        <button className={clsx('btn', (formStatus==='Show') && 'd-none')} type={'submit'}>
                            {formStatus === 'Add' ? 'Add' : 'Update'}
                        </button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default FormTemplate;
