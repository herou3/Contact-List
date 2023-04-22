import React, { useState } from 'react'
import { validatorConfig } from '../models/validatorConfig'
import {
	saveObjectInLocalStorage,
	getLocalStorageObject
} from '../utils/interactionLocalStorage'
import ContactInfo from '../components/cards/contactInfo'

const ContactCard = () => {
	const dataFromLocalStorage = getLocalStorageObject('currentUser')
	const [data, setData] = dataFromLocalStorage
		? useState(dataFromLocalStorage)
		: useState({
				firstName: '',
				lastName: '',
				birthday: '',
				url: ''
		  })
	const [currentData, setCurrentData] = useState(data)
	const [, setIsEditMode] = useState(false)
	const [isHaveData, setIsHaveData] = useState(data ? true : false)

	const handleChange = ({ target }) => {
		setCurrentData((prevState) => ({
			...prevState,
			[target.name]: target.value
		}))
	}

	const handleCompleteEdit = () => {
		saveObjectInLocalStorage('currentUser', currentData)
		setData(currentData)
		setIsHaveData(true)
	}

	const toggleChangeEditMode = () => {
		setIsEditMode((prevState) => !prevState)
	}

	return (
		<>
			<ContactInfo
				data={data}
				// firstName={data.firstName}
				// lastName={data.lastName}
				// birthday={data.birthday}
				// url={data.url}
				onChangeMode={toggleChangeEditMode}
				onChange={handleChange}
				onCompleteChange={handleCompleteEdit}
				validatorConfig={validatorConfig}
				isHaveDate={isHaveData}
			/>
		</>
	)
}

export default ContactCard
