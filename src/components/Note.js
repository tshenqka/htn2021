import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import localStorage from 'localStorage';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Note(props) {
  const { x, y, size} = props;
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
    <Box
        sx={{
            '& > :not(style)': {
                m: 1,
                backgroundColor: "#f4cb85",
                width: size,
                position: 'relative',
                top: y,
                left: x,
                borderRadius: "4px",
            },
        }}
    >
      <Typography component="div">
        <TextField
          id="outlined-multiline-flexible"
          fullWidth
          multiline
          maxRows={4}
          value={value}
          onChange={handleChange}
        />
      </Typography>
    </Box>
  )
}

export default Note