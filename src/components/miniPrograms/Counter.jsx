import { Button } from "@mui/material";
import React, { useState } from "react";

import AddBoxIcon from '@mui/icons-material/AddBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';

const Counter = function () {
   const [count, setCount] = useState(0)

   function increment() {
      setCount(count + 1)
   }

   function decrement() {
      setCount(count - 1)
   }

   return (
      <div style={{ textAlign: 'center' }}>
         <h3>Counter - Component</h3>
         <h1 style={{ fontSize: '20px' }}>{count}</h1>

         <Button
            style={{ marginRight: '10px' }}
            variant="contained"
            color="error"
            endIcon={<IndeterminateCheckBoxIcon />}
            onClick={decrement}>Decrement
         </Button>

         <Button
            variant="contained"
            color="success"
            endIcon={<AddBoxIcon />}
            onClick={increment}>Increment
         </Button>

      </div>
   )

}

export default Counter;