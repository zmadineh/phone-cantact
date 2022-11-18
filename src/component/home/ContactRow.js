import '../../App.css';
import {FaHeart, FaRegHeart} from "react-icons/fa";
import ContactListDetail from "./ContactListDetail";
import {useDispatch, useSelector} from "react-redux";
import {expandContact, updateFavfContact} from "../../toolkit/slices/contact.slice";
import clsx from "clsx";
import {Avatar} from "@mui/material";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import TableRow from "@mui/material/TableRow";
import React from "react";
import {styled} from "@mui/material/styles";
import TableCell from "@mui/material/TableCell";
import {useNavigate} from "react-router-dom";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    padding: '25px',
}));


const ContactRow = ({contactItem}) => {
    const contact = useSelector((state) => state.contact.contacts);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const showContact = () => {
        navigate(`/Show/${contactItem.id}`);
    }

    return (
        <TableRow hover>
            <StyledTableCell onClick={showContact}>
                <Avatar src={`https://avatars.dicebear.com/api/${contactItem.gender}/${contactItem.id}.svg`}/>
            </StyledTableCell>

            <StyledTableCell align="center">
                <Typography variant={"body1"}>{contactItem.name} {contactItem.family}</Typography>
            </StyledTableCell>

            <StyledTableCell align="center" sx={{display: {xs: "none", sm: "table-cell"}}}>
                <Typography variant={"body1"}>{contactItem.number}</Typography>
            </StyledTableCell>

            <StyledTableCell align="center" sx={{display: {xs: "none", sm: "table-cell"}}}>
                <Typography variant={"body1"}>{contactItem.email}</Typography>
            </StyledTableCell>

            <StyledTableCell align="center" onClick={() => dispatch(updateFavfContact(contactItem))}>
                <IconButton>{contactItem.favourite  ? <FavoriteIcon color={'error'}/> : <FavoriteBorderIcon/> }</IconButton>
            </StyledTableCell>
        </TableRow>

    )
}

export default ContactRow;