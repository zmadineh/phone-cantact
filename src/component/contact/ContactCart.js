import React, {useState} from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import {Avatar} from "@mui/material";
import Typography from "@mui/material/Typography";
import {styled} from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import {Delete, Edit} from "@mui/icons-material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import EmailIcon from '@mui/icons-material/Email';
import ManIcon from '@mui/icons-material/Man';
import WomanIcon from '@mui/icons-material/Woman';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Box from "@mui/material/Box";
import RemoveDialog from "../common/RemoveDialog";
import {removeContact} from "../../toolkit/slices/contact.slice";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

const StyledAvatar = styled(Avatar)(({ theme }) => ({
    width: 55,
    height: 55,

    [theme.breakpoints.up('sm')]: {
        width: 75,
        height: 75,
    },

    [theme.breakpoints.up('md')]: {
        width: 100,
        height: 100,
    },
}));


const ContactCart = ({form, status, setStatus}) => {

    const navigate = useNavigate();

    const [open, setOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState("true")

    const contact = useSelector((state) => state.contact.contacts);
    const dispatch = useDispatch();

    const onClose = (value) => {
        console.log(value, Number(form.id), contact.filter(item => item.id === Number(form.id))[0])
        if (value === true){
            dispatch(removeContact(contact.filter(item => item.id === Number(form.id))[0]))
        }
        setOpen(false)
        navigate('/')
    }

    const handleDeleteContact = () => {
        setOpen(true)
    }

    const handleUpdateContact = () => {
        setStatus("Update")
    }

    return (
        <Grid container item xs={12} component={Paper} flexDirection={"column"} px={3} py={2} spacing={4}>

            <RemoveDialog open={open} selectedValue={selectedValue} onClose={onClose} />

            <Grid container item justifyContent={"space-between"}>
                <Grid item xs={8} display={"flex"} alignItems={"center"} gap={3}>
                    <Grid item sx={{position: "relative"}}>
                        <StyledAvatar src={`https://avatars.dicebear.com/api/${form.gender}/${form.id}.svg`} />
                        <Box sx={{position: "absolute", bottom: -5, right: -5}}>
                            { form.favourite ? <FavoriteIcon color={"error"} /> : <FavoriteBorderIcon />}
                        </Box>
                    </Grid>
                    <Grid item>
                        <Typography variant={"h5"}>{form.name} {form.family}</Typography>
                        <Typography variant={"body1"} color={"text.secondary"}>{form.number}</Typography>
                    </Grid>
                </Grid>

                {status !== "Add" ?
                    <Grid item xs={4} display={"flex"} alignItems={"center"} justifyContent={"flex-end"} gap={1}>
                        <IconButton onClick={handleDeleteContact}> <Delete /> </IconButton>
                        <IconButton onClick={handleUpdateContact}> <Edit /> </IconButton>
                    </Grid>
                    : null }
            </Grid>

            {status !== "Add" ?
            <Grid container item>
                <List sx={{ width: '100%'}}>
                    <ListItem>
                        <ListItemIcon>
                           <EmailIcon />
                        </ListItemIcon>
                        <ListItemText primary={form.email} />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <LocationOnIcon />
                        </ListItemIcon>
                        <ListItemText primary={form.city} secondary={form.country} />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            {form.gender === "male" ? <ManIcon /> : <WomanIcon />}
                        </ListItemIcon>
                        <ListItemText primary={form.gender} />
                    </ListItem>
                </List>
            </Grid>
                : null }
        </Grid>
    )
}

export default ContactCart;