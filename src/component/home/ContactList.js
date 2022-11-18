import '../../App.css';
import { useState } from "react";
import DelMessage from "../common/DelMessage";
import ContactRow from "./ContactRow";
import {useDispatch} from "react-redux";
import {expandContact, removeContact, updateFavfContact} from "../../toolkit/slices/contact.slice";
import {useSelector} from "react-redux";
import NothingToShow from "../common/NothingToShow";
import Grid from "@mui/material/Grid";
import React from "react";

import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import TableBody from "@mui/material/TableBody";
import TableCell, {tableCellClasses} from "@mui/material/TableCell";
import {styled} from "@mui/material/styles";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import Paper from "@mui/material/Paper";

const StyledTableContainer = styled(TableContainer)(({ theme}) => ({
    border: 0,
    borderRadius: 0,

    [theme.breakpoints.up('md')]: {
        borderRadius: '8px',
        borderColor: theme.palette.divider,
    },
}));

const StyledHeaderTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.background.secondary,
        color: theme.palette.text.primary,
    },

    [theme.breakpoints.down('md')]: {
        borderBottom: 0
    }
}));

const ContactList = ({search, searchFavEnable}) => {

    const contact = useSelector((state) => state.contact.contacts);
    const dispatch = useDispatch();

    const [showDelMessage, setsShowDelMessage] = useState('none');
    const [delId, setDelId] = useState(0);

    const handleDelete = () => {
        dispatch(removeContact(contact.filter(c => c.id === delId)[0]));
        handleNoDel()
    }

    const handleDelMessage = id => {
        setsShowDelMessage('flex')
        setDelId(id)
    }

    const handleNoDel = () => {
        setsShowDelMessage('none')
        setDelId(0)
    }

    const contactFilter = () => {
        let contactList = contact.filter(contactItem =>
            ((contactItem.name.toUpperCase().includes(search.toUpperCase())) || (contactItem.family.toUpperCase().includes(search.toUpperCase())))
            && (searchFavEnable ? contactItem.favourite : true));
        return { contactList, length: contactList.length };
    }

    const header = {
        xs: ['Image', 'Name', 'Favorite'],
        md: ['Image', 'Name', 'Phone number', 'Email', 'Favorite']
    }


    return (
        <Grid container mt={'30px'}>

            <DelMessage handleDelete={handleDelete} handleNoDel={handleNoDel} showDelMessage={showDelMessage} />

            <StyledTableContainer component={Paper} sx={{border: '1px solid', borderColor: 'divider', borderRadius: '8px'}}>
                <Table aria-label="contacts table" stickyHeader>

                    <TableHead>
                        <TableRow sx={{display: {xs: "none", sm: "table-row"}}}>
                            <StyledHeaderTableCell align={"left"}>
                                <Typography variant={'h6'}>{header.md[0]}</Typography>
                            </StyledHeaderTableCell>

                            {header.md.slice(1).map(item => (
                                <StyledHeaderTableCell key={item} align={"center"}>
                                    <Typography variant={'h6'}>{item}</Typography>
                                </StyledHeaderTableCell>
                            ))}
                        </TableRow>
                        <TableRow sx={{display: {xs: "table-row", sm: "none"}}}>
                            <StyledHeaderTableCell align={"left"}>
                                <Typography variant={'h6'}>{header.xs[0]}</Typography>
                            </StyledHeaderTableCell>

                            {header.xs.slice(1).map(item => (
                                <StyledHeaderTableCell key={item} align={"center"}>
                                    <Typography variant={'h6'}>{item}</Typography>
                                </StyledHeaderTableCell>
                            ))}
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {contactFilter().contactList.map(contactItem => (
                            <ContactRow key={contactItem.id} contactItem={contactItem}/>
                        ))}
                    </TableBody>
                </Table>
            </StyledTableContainer>

            { contactFilter().length === 0 ? <NothingToShow /> : null }
        </Grid>
    )
}

export default ContactList;
