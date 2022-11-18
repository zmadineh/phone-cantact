import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import MenuItem from '@mui/material/MenuItem';

const genderOptions = [
    {
        value: 'male',
        label: 'Male',
    },
    {
        value: 'female',
        label: 'Female',
    },
];


const FormInput = ({input, form, setForm ,status}) => {

    const handleChange = e => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    return (
        <Grid item sx={{ width: '25ch' }}>
            {input.name === "gender" ?
                <TextField
                    id="outlined-select-gender"
                    select
                    label="Select"
                    name={input.name}
                    value={form[input.name]}
                    onChange={handleChange}
                    fullWidth
                    // helperText="Please select your gender"
                >
                    {genderOptions.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                :
                <TextField
                    id="form-input"
                    label={input.title}
                    name={input.name}
                    variant="outlined"
                    onChange={handleChange}
                    value={form[input.name]}
                    color={"primary"}
                />
            }
        </Grid>
    )
}

export default FormInput;