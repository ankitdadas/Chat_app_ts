import * as React from "react";
import { TextField, Autocomplete } from "@mui/material";
import ConversationData from './../ConversationsList/Conversion.json';




export default function Searchbox({ setUsers }: { setUsers: any }) {
    const [serachBoxArr, setSearchBoxArr] = React.useState([]);
    return (
        <Autocomplete
            id="free-solo-demo"
            freeSolo
            filterOptions={(x) => x}
            sx={{ flex: 1 }}
            options={serachBoxArr.map(
                (option: any) => `${option.firstName} ${option.lastName} ${option.mobileNumber}`
            )}
            onChange={(event, newValue) => {
                console.log(event);
                setUsers(newValue);
            }}
            onInputChange={(e) => {
                const target = e.target as HTMLTextAreaElement;
                if (target.value) {
                    const result: any = top100Users.filter(
                        (t) =>
                            t.firstName
                                .toLowerCase()
                                .startsWith(target.value.toLowerCase()) ||
                            t.lastName.toLowerCase().startsWith(target.value.toLowerCase()) ||
                            t.mobileNumber.startsWith(target.value)
                    );

                    setSearchBoxArr(result);
                } else {
                    setSearchBoxArr([]);
                }
            }}
            renderInput={(params) => <TextField {...params} variant="outlined" style={{ minWidth: "265px", borderColor: "#fff", outline: "none", marginLeft: "5px", marginRight: "5px" }} label="Search" />}
        />
    );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Users = ConversationData.data.map((p) => {
    return {
        firstName: p.contact.firstName,
        lastName: p.contact.lastName,
        mobileNumber: p.contact.mobile?.mnumber! || '',
    };
});
