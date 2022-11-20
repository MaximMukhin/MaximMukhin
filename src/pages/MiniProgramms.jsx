import React from 'react'
import Counter from "../components/miniPrograms/Counter";
import InputText from "../components/miniPrograms/InputText";
import InputTextAreaAc from '../components/miniPrograms/InputTextAreaAc';
import SpeedCut from '../components/miniPrograms/SpeedCut';
import InputTextAreaIberis from '../components/miniPrograms/InputTextAreaIberis';
import { Page } from '../components/Page';


const MiniProgramms = () => {
   return (
      <Page>
         <h1 style={{
            textAlign: 'center',
            fontSize: '20px',
            fontWeight: '900'
         }}>
            Компонент Mini-Programs

         </h1>
         <hr style={{ margin: '15px 0' }} />

         <InputTextAreaAc /> 

         <hr style={{ margin: '15px 0' }} />

         <InputTextAreaIberis />

         <hr style={{ margin: '15px 0' }} />

         <Counter />

         <hr style={{ margin: '15px 0' }} />

         <SpeedCut />

         <hr style={{ margin: '15px 0' }} />

         <InputText />

         <hr style={{ margin: '15px 0' }} />


         <hr style={{ margin: '15px 0' }} />
      </Page>
   );
};

export default MiniProgramms;