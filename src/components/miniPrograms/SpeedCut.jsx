import { TextField } from "@mui/material";
import React, { useState } from "react";


const SpeedCut = function () {
   const [knifeSpeedCut, setKnifeSpeedCut] = useState('')
   const [eatSpeedCut, setEatSpeedCut] = useState('')
   const [turnsSpeedCut, setTurnsSpeedCut] = useState('')
   
   return (
      <div style={{ textAlign: 'center' }}>
         <h3>SpeedCut - Component</h3>
         <br />
         <h3>Скорость подачи: {knifeSpeedCut * eatSpeedCut * turnsSpeedCut}мм/мин</h3>
         <TextField
            style={{ marginTop: '15px' }}
            id="outlined-basic"
            label="Knife - Ножей"
            variant="outlined"
            color="info"
            size="small"
            value={knifeSpeedCut}
            onChange={event => setKnifeSpeedCut(event.target.value)}
         />

         <TextField
            style={{ marginTop: '15px' }}
            id="outlined-basic"
            label="Eat - Подача"
            variant="outlined"
            color="info"
            size="small"
            value={eatSpeedCut}
            onChange={event => setEatSpeedCut(event.target.value)}
         />

         <TextField
            style={{ marginTop: '15px' }}
            id="outlined-basic"
            label="Turns - Обороты"
            variant="outlined"
            color="info"
            size="small"
            value={turnsSpeedCut}
            onChange={event => setTurnsSpeedCut(event.target.value)}
         />
      </div>
   )
}

export default SpeedCut;