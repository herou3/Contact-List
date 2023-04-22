import { Link } from 'react-router-dom'
import React from 'react'


const CustomLink = ({ children, data, to, ...props }) => {
	return (
		<Link to={to} state={ data } {...props}>
			{children}
		</Link>
	)
}

export default CustomLink
