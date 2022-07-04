import React, { useState } from 'react'
import AboutBmi from '../Components/AboutBmi'
import BmiCalculator from '../Components/BmiCalculator'
import NavItem from '../Components/NavItem'
import Toolbar from '../Components/Toolbar'

const MainPage = () => {
  const [showPage, setShowPage] = useState(1)
  return (
    <>
      <Toolbar>
        <NavItem onClick={() => setShowPage(1)} isActive={showPage === 1}>
          BMI Calculator
        </NavItem>
        <NavItem onClick={() => setShowPage(2)} isActive={showPage === 2}>
          About BMI
        </NavItem>
      </Toolbar>
      {showPage === 1 ? <BmiCalculator /> : <AboutBmi/>}
    </>
  )
}

export default MainPage