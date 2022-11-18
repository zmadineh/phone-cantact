import React from "react";

import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Search from "@mui/icons-material/Search";
import {styled} from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Close from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import {Input, InputLabel} from "@mui/material";

const StyledOutlinedInput = styled(OutlinedInput)(({ theme }) => ({
    color: theme.palette.text.secondary,
    height: '100%',
    '& .MuiOutlinedInput-notchedOutline' : {
        borderColor: theme.palette.grey['100'],
    }
}));

const OutlinedSearchBox = ({search, setSearch, borderRadius = '10px'}) => {

    const handleSearch = (e) => {
        setSearch(e.target.value.toString().toLowerCase())
    }

    const emptySearchBox = () => {
        setSearch('')
    }

    return (
        <FormControl sx={{ m: 1, borderColor: 'divider'}} variant="standard" fullWidth>
            <InputLabel htmlFor="outlined-adornment-password">Search</InputLabel>
            <Input
                id="search-input"
                label="Search"
                type="text"
                value={search}
                onChange={handleSearch}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton onClick={emptySearchBox}> <Close /> </IconButton>
                    </InputAdornment>
                }
            />
        </FormControl>
    )
}

export default OutlinedSearchBox;