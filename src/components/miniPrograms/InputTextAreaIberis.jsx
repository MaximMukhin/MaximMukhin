import { TextField } from "@mui/material";
import React, { useState } from "react";
/* import React, { useEffect } from "react"; */

const InputTextAreaIberis = function () {
   const [valueInputTextAreaIb, setValueInputTextAreaIb] = useState('')
   /*    const [valueInputTextAreaIbNew, setValueInputTextAreaIbNew] = useState([]) */

   const splitInput = (string) => {
      let arr = string.split('\n')
      return arr
   }

   /*    useEffect(() => {
         setValueInputTextAreaNew(splitInput(valueInputTextAreaAc))
      }, [valueInputTextAreaAc]) */

   const newArticle = splitInput(valueInputTextAreaIb).map((art) => {

      let replaced = art.replace(/\/|\s/g, '-') //=
         .replace(/\s+/g, '-')  //=
      return replaced.toLowerCase();
   })

   return (
      <div style={{ textAlign: 'center' }}>
         <br />
         <h3>InputTextArea Iberis - Component</h3>
         <br />
         <div style={{ display: 'flex' }}>
            <TextField
               style={{ marginTop: '15px' }}
               sx={{ width: '400px' }}
               id="outlined-basic"
               label="Артикулы"
               variant="outlined"
               color="info"
               size="small"
               multiline
               value={valueInputTextAreaIb}
               onChange={event => setValueInputTextAreaIb(event.target.value)}
            />

            <ul style={{ listStyleType: 'none', width: '40%' }}>
               <h3>Полученные Артикулы</h3>
               <br />
               {newArticle.map((item, index) => (
                  <li key={index}>{item}</li>
               ))}
            </ul>
         </div>
         {/*          <br />
         <p>splitInput: <br /> {splitInput(valueInputTextAreaIb)}</p>
         <br />
         <p>valueInputTextAreaIb:<br /> {valueInputTextAreaIb}</p>
         <br />
         <p>valueInputTextAreaIbNew:<br /> {valueInputTextAreaIbNew}</p>
         <br /> */}
      </div>
   );
};
export default InputTextAreaIberis;

/* 
KRAFT 39-500/390-2C-SO-CG
KRAFT 39-600/390-2C-SO-CG
KRAFT 39-700/390-2C-SO-CG
KRAFT 39-800/390-2C-SO-CG
KRAFT-600-2C-SO-CG
KRAFT-700-2C-SO-CG
KRAFT-800-2C-SO-CG
KRAFT-900-2C-SO-CG
KRAFT-1000-2C-SO-CG
KRAFT-1600-2A-SC-CG-L
KRAFT-1600-2A-SC-CG-R
KRAFT MINI-500/260-1A-SO-CG-L
KRAFT MINI-500/260-1A-SO-CG-R
*/