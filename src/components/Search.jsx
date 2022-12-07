import TextField from '@mui/material/TextField';

const Search = ({ onChange, value }) => {
   
    return <TextField
    label='search'
    type='search'
    sx={{mb: '1.5rem', width: 370}}
    size="small" 
    value={value} 
    onChange={onChange} 
    />;
};

export default Search;