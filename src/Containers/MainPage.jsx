import React from 'react'
import NavItem from '../Components/NavItem'
import Toolbar from '../Components/Toolbar'

const MainPage = () => {
  return (
    <Toolbar>
      <NavItem onClick={() => console.log('clicked')} isActive>
        BMI Calculator
      </NavItem>
      <NavItem onClick={() => console.log('clicked')}>About BMI</NavItem>
    </Toolbar>
  )
}

export default MainPage