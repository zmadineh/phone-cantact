import '../../App.css';
import {Link, useNavigate, useParams} from "react-router-dom";
import React, {useEffect} from "react";
import FormInput from './FormInput.js';
import {formInputsName} from '../../data/formInputsName';
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import {addContact, removeContact} from "../../toolkit/slices/contact.slice";
import {updateContact} from "../../toolkit/slices/contact.slice";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import {emptyForm} from "../../data/emptyForm";
import {Button} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";


const favOptions = [
    {
        value: 'true',
        label: 'Favorite',
    },
    {
        value: 'false',
        label: 'Un favorite',
    },
];

const FormTemplate =  ({form, setForm, lastId, setLastId, status}) => {

    const navigate = useNavigate();
    const {id} = useParams();
    // const {formStatus} = useParams();

    const contact = useSelector((state) => state.contact.contacts);
    const dispatch = useDispatch();

    useEffect(() => {
        if (status === 'Add')
           setForm({id:lastId+1, ...emptyForm});
        if (status === 'Update')
            setForm(contact.filter(item => item.id === Number(id))[0])
        if (status === 'Remove')
            dispatch(removeContact(contact.filter(item => item.id === Number(id))[0]))
    }, [])


    const handleFavChange = () => {
        setForm({...form, ['favourite']: !form.favourite})
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log(e)
        if (status === 'Add'){
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
                navigate('/')
            }
        }
        else {
            dispatch(updateContact(form))
            navigate('/')

        }
    }

    return (
        <Grid container component={Paper} mt={4} p={3}>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={10}>
                    <Grid item container gap={3}>
                        <Grid container item display={"flex"} gap={3}>
                            {formInputsName.map(input => (
                                <FormInput key={input.id} input={input} form={form} setForm={setForm} status={status}/>
                            ))}
                        </Grid>
                        <Grid sx={{ width: '25ch' }}>
                            <TextField
                                id="outlined-select-gender"
                                select
                                label="Select"
                                name={"favorite"}
                                value={form["favourite"]}
                                onChange={handleFavChange}
                                fullWidth
                            >
                                {favOptions.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                    </Grid>

                    <Grid item container gap={1} justifyContent={"flex-start"}>
                        <Link to={'/'}><Button variant={"outlined"} type={'button'}>Close</Button></Link>
                        <Button variant={"outlined"} type={'submit'}>
                            {status === 'Add' ? 'Add' : 'Update'}
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Grid>
)
}

export default FormTemplate;
