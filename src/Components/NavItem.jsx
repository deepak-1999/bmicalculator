import React from 'react'
import PropTypes from 'prop-types'

const NavItem = (props) => {
	const {onClick, isActive, children} = props
  return (
    <div>
      <div
        onClick={onClick}
        className={`block px-3 py-2 rounded-md ${
          isActive ? 'bg-stone-500 text-white' : 'bg-stone-400'
        }`}
      >
        {children}
      </div>
    </div>
  )
}

NavItem.propTypes={
	onClick: PropTypes.func.isRequired,
	isActive: PropTypes.bool,
	children: PropTypes.any.isRequired
}

export default NavItem