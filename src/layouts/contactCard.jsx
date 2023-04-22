import React, { useState } from 'react'
import { validatorConfig } from '../models/validatorConfig'
import { useLocation } from 'react-router-dom'
import {
	getLocalStorageObject
} from '../utils/interactionLocalStorage'
import ContactInfo from '../components/cards/contactInfo'

const ContactCard = () => {
	const dataFromLocalStorage = getLocalStorageObject('currentUser')
  const location = useLocation()
	const dataFromPastScreen = location.state
	const [data] = dataFromPastScreen ? useState(dataFromLocalStorage) : (dataFromLocalStorage
		? useState(dataFromLocalStorage)
		: useState({
				firstName: '',
				lastName: '',
				birthday: '',
				url: ''
		  }))

	return (
		<>
			<ContactInfo
				data={data}
				validatorConfig={validatorConfig}
			/>
		</>
	)
}

export default ContactCard
