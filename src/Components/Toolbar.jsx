import React from 'react'
import PropTypes from 'prop-types'

const Toolbar = (props) => {
  return (
    <nav className='flex py-4 px-6 text-sm font-medium bg-stone-400 '>
     <div className='flex space-x-3 mx-auto'>
      {props.children}
     </div> 
    </nav>
  )
}

Toolbar.propTypes = {
  children: PropTypes.any
}

export default Toolbar