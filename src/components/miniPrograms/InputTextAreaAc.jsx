import { TextField } from "@mui/material";
import React, { useState } from "react";
/* import React, { useEffect } from "react"; */

const InputTextAreaAc = function () {
   const [valueInputTextAreaAc, setValueInputTextAreaAc] = useState('')
   /*    const [valueInputTextAreaAcNew, setValueInputTextAreaAcNew] = useState([]) */

   const splitInput = (string) => {
      let arr = string.split('\n')
      return arr
   }

/*    useEffect(() => {
      setValueInputTextAreaAcNew(splitInput(valueInputTextAreaAc))
   }, [valueInputTextAreaAc]) */

   const newArticle = splitInput(valueInputTextAreaAc).map((art) => {

      let replaced = art.replace(/\t+/g, '-') //=
         .replace(/\s+/g, '-')  //=
         .replace(/-S-S-/gi, '-S-S') //=
         .replace(/-S-T-/gi, '-S-T') //=
         .replace(/-S-K-/gi, '-S-K') //=
         .replace(/-P-S-/gi, '-P-S') //=
         .replace(/-P-T-/gi, '-P-T') //=
         .replace(/-P-K-/gi, '-P-K') //=
         .replace(/-L-T-/gi, '-L-T') //=
         .replace(/-L-P-/gi, '-L-P') //=
         .replace(/-L-F-/gi, '-L-F') //=
         .replace(/1-D/gi, '1D') //=
         .replace(/2-D/gi, '2D') //=
         .replace(/1-B/gi, '1B') //=
         .replace(/2-B/gi, '2B') //=
         .replace(/1-M/gi, '1M') //=

      if (replaced[replaced.length - 1] === '-') {
         return replaced.slice(0, -1) //=
      } else {
         return replaced //=
      }
   })

   return (
      <div style={{ textAlign: 'center' }}>
         <br />
         <h3>InputTextArea AcquaCraft - Component</h3>
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
               value={valueInputTextAreaAc}
               onChange={event => setValueInputTextAreaAc(event.target.value)}
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
         <p>splitInput: <br /> {splitInput(valueInputTextAreaAc)}</p>
         <br />
         <p>valueInputTextAreaAc:<br /> {valueInputTextAreaAc}</p>
         <br />
         <p>valueInputTextAreaAcNew:<br /> {valueInputTextAreaAcNew}</p>
         <br /> */}
      </div>
   );
};
export default InputTextAreaAc;

/* 
SOFIA	S	K	21	106	1	D	SF027	L
SOFIA	S	K	21	106	1	D	SF027	R
SOFIA	S	K	22	67	1	M	SF027	
SOFIA	S	K	23	53	2	B	SF027	
SOFIA	S	S	20	60	2	B	SF027	
SOFIA	S	S	20	70	2	B	SF027	
SOFIA	S	S	20	80	2	B	SF027	
SOFIA	S	S	20	90	2	B	SF027	
SOFIA	S	S	20	100	2	B	SF027	
SOFIA	S	T	20	60	2	B	SF027	
SOFIA	S	T	20	70	2	B	SF027	
SOFIA	S	T	20	80	2	B	SF027	
SOFIA	S	T	20	90	2	B	SF027	
*/