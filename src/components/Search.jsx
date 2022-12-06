import TextField from '@mui/material/TextField';

const Search = ({ onChange, value }) => {
   
    return <TextField
    label='search'
    type='search'
    sx={{mb: '1.5rem', ml:'1rem', width: 400}}
    size="small" 
    value={value} 
    onChange={onChange} 
    />;
};

export default Search;