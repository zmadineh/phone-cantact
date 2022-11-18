import React from "react";
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import MenuIcon from "@mui/icons-material/Menu";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import {styled} from "@mui/material/styles";
import TableCell from "@mui/material/TableCell";

const actions = [
    { icon: <FavoriteBorderIcon />, title: 'Favorites' },
    { icon: <PersonAddAltIcon />, title: 'Add contact' },
];


const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
    "& .MuiSpeedDial-fab, .MuiSpeedDial-fab:hover" : {
        backgroundColor: theme.palette.background.default,
        color: theme.palette.primary.main,
    }
}));


const SpeedDialMenu = ({handleAction}) => {
    return(
        <Box sx={{display: {sm: "flex", md: "none"},}}>
            <StyledSpeedDial
                ariaLabel="SpeedDial basic example"
                sx={{ position: 'absolute', top: 1, right: 1, backgroundColor: "background.default" }}
                direction={"left"}
                icon={<MenuIcon />}
            >
                {actions.map((action) => (
                    <SpeedDialAction
                        key={action.title}
                        icon={action.icon}
                        tooltipTitle={action.title}
                        onClick={() => handleAction(action.title)}
                    />
                ))}
            </StyledSpeedDial>
        </Box>
    )
}

export default SpeedDialMenu;