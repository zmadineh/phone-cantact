import React, { useState } from "react";
import ContactList from "../component/home/ContactList";
import Sidebar from "../component/layout/sidebar/Sidebar";
import {useDispatch, useSelector} from "react-redux";
import {emptyForm} from "../data/emptyForm";
import Grid from "@mui/material/Grid";
import {DrawerHeader} from "../component/layout/sidebar/DrawerHeader";
import CreateList from "../component/layout/drawer/CreateList";
import {drawerContentList} from "../data/drawer/drawer-content-list";
import OutlinedSearchBox from "../component/common/OutlinedSearchBox";
import {styled} from "@mui/material/styles";
import {useNavigate} from "react-router-dom";

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


const HomePage = () => {

    const contact = useSelector((state) => state.contact.contacts);
    const dispatch = useDispatch();

    const navigate = useNavigate();


    // drawer section
    const [drawerOpen, setDrawerOpen] = useState(false);
    const drawerListData = drawerContentList.find(item => item.page === 'home').data;
    const contentStyle = {  transition: 'margin-left 450ms cubic-bezier(0.23, 1, 0.32, 1)', marginTop: '40px' };
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
        navigate("/Add/0");
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

    return (
        <Grid>
            <Sidebar open={drawerOpen} setOpen={setDrawerOpen} handleAction={handleAction}>
                <CreateList data={drawerListData} handleAction={handleAction} />
            </Sidebar>
            <DrawerHeader />

            <div style={contentStyle}>
                <StyledGrid container>
                    <Grid item container maxWidth={"500px"}>
                        <OutlinedSearchBox search={search} setSearch={setSearch} />
                    </Grid>
                    <Grid item container>
                        <ContactList search={search} searchFavEnable={searchFavEnable} />
                    </Grid>
                </StyledGrid>
            </div>
        </Grid>
    );
}

export default HomePage;
