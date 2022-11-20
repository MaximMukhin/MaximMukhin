import React from 'react'
import { StyledHeader } from './StyledHeader'

export const Header = () => {
  return (
    <StyledHeader>
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
        <img style={{ width: '32px', borderRadius: '4px' }} src="/images/furnicraft-logo.png" alt="logo" />
        <p>Furnicraft info</p>
      </div>
      <div>Header</div>
    </StyledHeader>

  )
}

