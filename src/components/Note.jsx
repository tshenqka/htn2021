import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
// import localStorage from 'localStorage';
import Box from '@mui/material/Box';
import coda from '../coda'

function Note(props) {
  const { x, y, size, initialNotes, rowId, docId, tableId} = props;
  const [value, setValue] = useState('Personal Note');

  useEffect(() => {
    if (initialNotes) setValue(initialNotes)
  }, [initialNotes])

  const handleChange = (event) => {
    setValue(event.target.value);
    coda.getDoc(docId).then(doc => doc.getTable(tableId).then(table => table.updateRow(rowId, {Notes: event.target.value})))
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
      <TextField
        id="outlined-multiline-flexible"
        fullWidth
        multiline
        maxRows={4}
        value={value}
        onChange={handleChange}
      />
    </Box>
  )
}

export default Note