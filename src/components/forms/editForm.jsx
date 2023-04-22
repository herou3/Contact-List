import React, { useState, useEffect } from 'react'
import TextField from '../common/textField'
import { validator } from '../../utils/validator'
import InfoModel from '../common/infoModal'
import CustomLink from '../common/customLink'
import { useLocation } from 'react-router-dom'

const EditForm = ({
	validatorConfig,
	onChange,
	isHaveDate,
	onCompleteChange,
	onChangeMode,
  ...props
}) => {
	const location = useLocation()
	const data = location.state?.data
  console.log(location)
	console.log(data)
  console.log(props)
	const [errors, setErrors] = useState({})
	const [isTryUpdate, setIsTryUpdate] = useState(false)
	const [fullName] = useState(data.lastName + ' ' + data.firstName)
	const [isCreated] = useState(isHaveDate)
	const [isOpenPopup, setIsOpenPopup] = useState(false)
	const isValid = Object.keys(errors).length === 0
	const handleSubmit = (event) => {
		event.preventDefault()
		const isValid = validate()
		setIsTryUpdate(true)
		if (!isValid) {
			return
		}
		onCompleteChange()
		setIsOpenPopup(true)
	}

	useEffect(() => {
		if (isTryUpdate) {
			validate()
		}
	}, [data])

	const validate = () => {
		const errors = validator(data, validatorConfig)
		setErrors(errors)
		return Object.keys(errors).length === 0
	}

	const handleClose = (prevState) => {
		setIsOpenPopup(!prevState)
		onChangeMode()
	}

	return (
		<div className='container mt-5'>
			<div className='row'>
				<div className='row justify-content-md-center'>
					<h2>{isHaveDate ? 'Edit ' + fullName : 'Create New User'}</h2>
					<form onSubmit={handleSubmit}>
						<TextField
							labelText='First Name'
							id='firstName'
							name='firstName'
							value={data.firstName}
							onChange={onChange}
							error={errors.firstName}
						></TextField>
						<TextField
							labelText='Last Name'
							id='lastName'
							name='lastName'
							value={data.lastName}
							onChange={onChange}
							error={errors.lastName}
						></TextField>
						<TextField
							labelText='Birthday'
							type='date'
							id='birthday'
							name='birthday'
							value={data.birthday}
							onChange={onChange}
							error={errors.birthday}
						></TextField>
						<TextField
							labelText='Url'
							id='url'
							name='url'
							value={data.url}
							onChange={onChange}
							error={errors.url}
						></TextField>
						<div className='d-grid gap-2 col-6 mx-auto'>
							<CustomLink></CustomLink>
							<button disabled={!isValid} className='btn btn-primary'>
								{isHaveDate ? 'Update' : 'Create'}
							</button>
							{isHaveDate && (
								<button className='btn btn-secondary' onClick={onChangeMode}>
									Back
								</button>
							)}
						</div>
					</form>
				</div>
			</div>
			{isHaveDate && (
				<InfoModel
					title='Success'
					text={
						isCreated ? 'User ' + fullName + ' was updated' : 'User was created'
					}
					isOpen={isOpenPopup}
					handleClose={handleClose}
				/>
			)}
		</div>
	)
}
///const InfoModel = ({ title, text, onClick }) => {
export default EditForm
