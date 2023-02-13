import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Paper, IconButton, Input } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
    const [ searchTerm,setSearchTerm] = useState('');
    const navigate = useNavigate();

    const onhandleSubmit = (e) => {
      e.preventDefault();
  
      if (searchTerm) {
        navigate(`/search/${searchTerm}`);
        setSearchTerm('');
      }
    };
  // check 
  return (
   <Paper
      component='form'
      onSubmit={onhandleSubmit}
      sx={{
        borderRadius: 20,
        border: '1px solid #e3e3e3',
        pl: 2,
        boxShadow: 'none',
        mr: { sm: 5 },
      }}
    >
      <Input  value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder='Search' disableUnderline='true'/>
      <IconButton type='submit' sx={{ p: '10px', color: 'red' }} aria-label='search'>
        <SearchIcon />
      </IconButton>
    </Paper>
  )
}

export default SearchBar