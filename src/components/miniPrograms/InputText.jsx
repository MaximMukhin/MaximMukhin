import { TextField } from "@mui/material";
import React, { useState } from "react";


const InputText = function () {
   const [valueInputText, setValueInputText] = useState('')

   return (
      <div style={{ textAlign: 'center' }}>
         <h3>InputText - Component</h3>
         <br />
         <h3>Value UpperCase: {valueInputText.toUpperCase()}</h3>

         <TextField
            style={{ marginTop: '15px' }}
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            color="info"
            size="small"
            value={valueInputText}
            onChange={event => setValueInputText(event.target.value)}
         />

      </div>
   )
}

export default InputText;