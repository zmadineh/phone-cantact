import React from "react";

import {theme} from "../../../themes/theme";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Icon from '@mui/material/Icon';
import Box from '@mui/material/Box';
import {Link} from "react-router-dom";


const CreateList = ({data, handleAction}) => {

    return (
        <List dir={theme.direction}>
            {data.map(listItem => (
                <ListItem key={listItem.id} disablePadding sx={{margin: "20px 0"}} onClick={() => handleAction(listItem.title)}>
                    <ListItemButton>
                        <ListItemIcon>
                            <Link to={listItem.link}><Icon color={"secondary"}>{listItem.icon}</Icon></Link>
                        </ListItemIcon>
                        <Box component={'div'}>
                            <ListItemText primary={listItem.title}/>
                        </Box>
                    </ListItemButton>
                </ListItem>
            ))}
        </List>

    )
}

export default CreateList;