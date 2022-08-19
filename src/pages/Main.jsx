import React from 'react'
import Navigation from '../components/Navigation'

const Main = () => {
   return (
      <div>
         <Navigation />
         <h3 style={{
            textAlign: 'center',
            fontWeight: '900'
         }}
         >
            Главная страница
         </h3>
      </div>

   )
}

export default Main