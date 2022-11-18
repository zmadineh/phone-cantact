import React from "react";
import { useTheme } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import {DrawerHeader} from "./DrawerHeader";
import {AppBar} from "../appBar/AppBar";
import {Drawer} from "../drawer/Drawer";
import CreateList from "../drawer/CreateList";
import {drawerContentList} from "../../../data/drawer/drawer-content-list";


const Sidebar = ({children, open, setOpen}) => {

    const filter = () => {
        console.log('filter')
    }

    const theme = useTheme();

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Grid>
            <AppBar position="fixed" open={open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{
                            marginRight: 5,
                            ...(open && { display: 'none' }),
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h4" noWrap component="div" color={"text.main"}>
                        Contacts
                    </Typography>
                </Toolbar>
            </AppBar>

            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose} color={"secondary"}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </DrawerHeader>
               <Divider />

                {children}

                {/*{drawerContentList.map(list => (*/}
                {/*    <CreateList key={list.section} list={list.data} />*/}
                {/*))}*/}
            </Drawer>
        </Grid>
) }

export default Sidebar;
