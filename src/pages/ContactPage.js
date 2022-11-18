import FormTemplate from "../component/contact/FormTemplate";
import Grid from "@mui/material/Grid";
import Sidebar from "../component/layout/sidebar/Sidebar";
import CreateList from "../component/layout/drawer/CreateList";
import {DrawerHeader} from "../component/layout/sidebar/DrawerHeader";
import React, {useEffect, useState} from "react";
import {drawerContentList} from "../data/drawer/drawer-content-list";
import {styled} from "@mui/material/styles";
import ContactCart from "../component/contact/ContactCart";
import {useParams} from "react-router-dom";
import {removeContact} from "../toolkit/slices/contact.slice";
import {useDispatch, useSelector} from "react-redux";
import {emptyForm} from "../data/emptyForm";

const StyledGrid = styled(Grid)(({ theme }) => ({
    flexDirection: "column",
    justifyContent: "center",
    padding: 0,
    margin: 0,
    alignItems: "center",

    [theme.breakpoints.up('md')]: {
        alignItems: "flex-start",
        paddingRight: "20px",
        paddingLeft: "90px",
    },
}));

const ContactPage = () => {

    // drawer section
    const [drawerOpen, setDrawerOpen] = useState(false);
    const drawerListData = drawerContentList.find(item => item.page === 'contact').data;
    const contentStyle = {  transition: 'margin-left 450ms cubic-bezier(0.23, 1, 0.32, 1)', marginTop: '40px' };
    if (drawerOpen) {
        contentStyle.marginLeft = 256;
    }

    const {id} = useParams();
    const {formStatus} = useParams();

    const contact = useSelector((state) => state.contact.contacts);
    const dispatch = useDispatch();

    const lastID = contact.length !== 0 ? contact[contact.length-1].id : 0;
    const [lastId, setLastId] = useState(lastID)
    const [form, setForm] = useState( {id:lastId+1, ...emptyForm});
    const [status, setStatus] = useState( "Show");

    useEffect(() => {
        if (formStatus === 'Update' || formStatus === "Show"){
            setForm(contact.filter(item => item.id === Number(id))[0])
            setStatus(formStatus)
        }
        if (formStatus === 'Remove')
            dispatch(removeContact(contact.filter(item => item.id === Number(id))[0]))

        if(formStatus === "Add")
            setStatus(formStatus)

    }, [])


    const handleAction = (title) => {

    }

    return (
        <Grid>
            <Sidebar open={drawerOpen} setOpen={setDrawerOpen} handleAction={handleAction}>
                <CreateList data={drawerListData} handleAction={handleAction} />
            </Sidebar>
            <DrawerHeader />

            <div style={contentStyle}>
                <StyledGrid container>
                    <ContactCart form={form} status={status} setStatus={setStatus}/>
                    {(status === "Update" || status === "Add") ? <FormTemplate form={form} setForm={setForm} lastId={lastID} setLastId={setLastId} status={status}/> : null}
                </StyledGrid>
            </div>
        </Grid>
    )
}

export default ContactPage;