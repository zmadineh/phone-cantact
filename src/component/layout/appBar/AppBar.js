import {styled} from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import {drawerWidth} from "../../../data/drawer/drawerWidth";

export const AppBar = styled(MuiAppBar, {shouldForwardProp: (prop) => prop !== 'open',})(({ theme, open }) => ({
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
    border: "1px solid",
    borderColor: theme.palette.divider,
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));