import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            maxWidth:"300px",
            width:"100%",
        },
    },
};

const names: any[] = [
    'Test',
    'Test 1',
];
export default function MultipleSelectGroups() {
    const [personName, setPersonName] = React.useState([]);

    const handleChange = (event: any) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a the stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    return (
        <>
            <FormControl sx={{ m: 1, 
           //  maxWidth: "300px",
             width:"100%",
             margin:"0px",
        }}>

                <Select sx={{ m: 1, minWidth: 110, maxWidth:"100%", }}
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={personName}
                    onChange={handleChange}
                    input={<OutlinedInput label="Tag" />}
                    renderValue={(selected) => selected.join(', ')}
                    MenuProps={MenuProps}
                >
                    {names.map((name: string) => (
                        <MenuItem key={name} value={name}>
                            <Checkbox checked={personName.find(p => p === name) && true} />
                            <ListItemText primary={name} />
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </>
    );
}