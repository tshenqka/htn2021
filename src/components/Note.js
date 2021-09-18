import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import localStorage from 'localStorage';

function Note() {
  const [value, setValue] = useState('Personal Note');

  useEffect(() => {
    var obj = localStorage.getItem("note");
    if (obj != null) setValue(obj)
  })

  const handleChange = (event) => {
    setValue(event.target.value);
    localStorage.setItem("note", event.target.value)
  };

  return (
    <TextField
      id="outlined-multiline-flexible"
      multiline
      maxRows={4}
      value={value}
      onChange={handleChange}
    />
  )
}

export default Note