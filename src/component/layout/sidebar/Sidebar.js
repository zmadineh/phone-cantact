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
import SpeedDialMenu from "./SpeedDialMenu";


const Sidebar = ({children, open, setOpen, handleAction}) => {

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
                            display: {xs: "none", md: "flex"},
                            marginRight: 5,
                            ...(open && { display: 'none' }),
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <SpeedDialMenu handleAction={handleAction} />
                    <Typography variant="h4" noWrap component="div" color={"text.main"}>
                        Contacts
                    </Typography>
                </Toolbar>
            </AppBar>

            <Drawer variant="permanent" open={open} sx={{display: {xs: 'none', md: "block"}}}>
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose} color={"secondary"}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </DrawerHeader>
               <Divider />

                {children}

            </Drawer>
        </Grid>
) }

export default Sidebar;
