import '../App.css';
import React, { useState } from "react";
import ContactList from "../component/ContactList";
import Sidebar from "../component/layout/sidebar/Sidebar";
import {useDispatch, useSelector} from "react-redux";
import {collapseContact} from "../toolkit/slices/contact.slice";
import {emptyForm} from "../data/emptyForm";
import Grid from "@mui/material/Grid";
import {DrawerHeader} from "../component/layout/sidebar/DrawerHeader";
import CreateList from "../component/layout/drawer/CreateList";
import {drawerContentList} from "../data/drawer/drawer-content-list";
import OutlinedSearchBox from "../component/common/OutlinedSearchBox";
import Close from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";

const HomePage = () => {

    const contact = useSelector((state) => state.contact.contacts);
    const dispatch = useDispatch();

    // drawer section
    const [drawerOpen, setDrawerOpen] = useState(false);
    const drawerListData = drawerContentList.find(item => item.page === 'home').data;
    const contentStyle = {  transition: 'margin-left 450ms cubic-bezier(0.23, 1, 0.32, 1)', marginLeft: '70px', marginTop: '70px' };
    if (drawerOpen) {
        contentStyle.marginLeft = 256;
    }

    // main section
    const lastID = contact.length !== 0 ? contact[contact.length-1].id : 0;
    const [lastId, setLastId] = useState(lastID);
    const [form, setForm] = useState( {id:lastId+1, ...emptyForm});
    const [formStatus, setFormStatus] = useState('Add');
    const [searchFavEnable, setSearchFavEnable] = useState(false);
    const [displaySearchBox, setDisplaySearchBox] = useState('none'); // none or flex
    const [search, setSearch] = useState('');


    const handleAddIcon = () => {
        setForm({id: lastId+1, ...emptyForm})
        setFormStatus('Add')
    }

    const favouriteFilter = () => {
        setSearchFavEnable(!searchFavEnable)
    }

    const handleAction = (title) => {
        console.log(title)
        if (title === "Search") {
            setDisplaySearchBox("flex");
        }
        if (title === "Add contact") {
            handleAddIcon();
        }
        if (title === "Favorites") {
            favouriteFilter();
        }
    }

    const closeSearchBox = () => {
        setDisplaySearchBox("none");
    }

    const disableWrapper = () => {
        dispatch(collapseContact());
    }

    return (
        <Grid>
            <Sidebar open={drawerOpen} setOpen={setDrawerOpen}>
                <CreateList data={drawerListData} handleAction={handleAction} />
            </Sidebar>
            <DrawerHeader />

            <div style={contentStyle}>
                <Grid container display={displaySearchBox} justifyContent={"center"} alignItems={"center"}>
                    <Grid item xs={10} sm={8} md={6}>
                        <OutlinedSearchBox search={search} setSearch={setSearch} />
                    </Grid>
                    <Grid item>
                        <ContactList search={search} searchFavEnable={searchFavEnable} />
                    </Grid>
                </Grid>
            </div>
        </Grid>
    );
}

export default HomePage;
