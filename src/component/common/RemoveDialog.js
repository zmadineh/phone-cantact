import React, {useState} from "react";
import Dialog from '@mui/material/Dialog';
import Typography from "@mui/material/Typography";
import {Button} from "@mui/material";
import Grid from "@mui/material/Grid";

const RemoveDialog = ({open, onClose}) => {

    // const [value, setValue] = useState('false')

    const handleButtonClick = (value) => {
        onClose(value);
    };

    const handleClose = () => {
        onClose(false);
    };

    return (
        <Dialog onClose={handleClose} open={open}>
            <Grid container p={3} gap={3}>
                <Typography>Are you sure you want to remove this contact?</Typography>
                <Grid container gap={2}>
                    <Button variant={"outlined"} onClick={() => handleButtonClick(true)}>Yes</Button>
                    <Button  variant={"outlined"} onClick={() => handleButtonClick(false)}>No</Button>
                </Grid>
            </Grid>

        </Dialog>
    )
}

export default RemoveDialog;