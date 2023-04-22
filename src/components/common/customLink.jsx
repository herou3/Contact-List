import { Link } from 'react-router-dom'
import React from 'react'

const CustomLink = ({ children, data, to, ...props }) => {
  
  const getActiveStatus = () => {
    if (props?.isdisabled==="true") {
      return {pointerEvents: "none"}
    }
    return {color: "green"}
  }

	return (
		<Link to={to} state={ data } style={getActiveStatus()} {...props}>
			{children}
		</Link>
	)
}

export default CustomLink
