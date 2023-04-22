import React, { useState, useEffect } from 'react'
import TextField from '../common/textField'
import { validator } from '../../utils/validator'
import InfoModel from '../common/infoModal'
import CustomLink from '../common/customLink'
import { validatorConfig } from '../../models/validatorConfig'
import { useLocation, useNavigate } from 'react-router-dom'
import { saveObjectInLocalStorage, getLocalStorageObject } from '../../utils/interactionLocalStorage'

const EditForm = () => {
	const location = useLocation()
	const data = location.state?.data
  const navigate = useNavigate()
	const [changingData, setChangingData] = data ? useState(data?.dataForForm) : useState(getLocalStorageObject('currentUser'))
	
  const [validateConfig, setValidateConfig] = useState(data?.validatorConfig)
  const [savedData, setSavedData] = useState(changingData)
	const [isHaveData, setIsHaveData] = data?.isHaveData ? useState(data?.isHaveData) : (changingData ? useState(true) : useState(false))
	const [errors, setErrors] = useState({})
	const [isTryUpdate, setIsTryUpdate] = useState(false)
	const [fullName] = useState(
		changingData?.lastName + ' ' + changingData?.firstName
	)
	const [isCreated] = useState(isHaveData)
	const [isOpenPopup, setIsOpenPopup] = useState(false)
	const [isSuccessChange, setIsSuccessChange] = useState(false)
	const isValid = Object.keys(errors).length === 0

	const handleChange = ({ target }) => {
		setChangingData((prevState) => ({
			...prevState,
			[target.name]: target.value
		}))
	}

	const handleCompleteEdit = () => {
		saveObjectInLocalStorage('currentUser', changingData)
		setSavedData(changingData)
		setIsHaveData(true)
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		const isValid = validate()
		setIsTryUpdate(true)
		if (!isValid) {
			return
		}
		handleCompleteEdit()
		setIsOpenPopup(true)
	}

  useEffect(() => {
    if(!changingData) {
      navigate('/create')
    }
    if (changingData && location.pathname.includes("create")) {
      navigate('/edit')
    }
  }, [])

	useEffect(() => {
		if (isTryUpdate) {
			validate()
		}
	}, [changingData])

  useEffect(() => {
    if (!changingData) {
      setChangingData({
				firstName: '',
				lastName: '',
				birthday: '',
				url: ''
		  })
    }
    if (!validateConfig) {
      setValidateConfig(validatorConfig)
    }
  }, [])

	useEffect(() => {
		if (isSuccessChange) {
			navigate('/', { state: savedData })
		}
	}, [isSuccessChange])

	const validate = () => {
		const errors = validator(changingData, validateConfig)
		setErrors(errors)
		return Object.keys(errors).length === 0
	}

	const handleClose = (prevState) => {
		setIsOpenPopup(!prevState)
		if (isValid) {
			setIsSuccessChange(true)
		}
	}

	return (
		<div className='container mt-5'>
			<div className='row'>
				<div className='row justify-content-md-center'>
					<h2>{isHaveData ? 'Edit ' + fullName : 'Create New User'}</h2>
					<form onSubmit={handleSubmit}>
						<TextField
							labelText='First Name'
							id='firstName'
							name='firstName'
							value={changingData?.firstName}
							onChange={handleChange}
							error={errors?.firstName}
						></TextField>
						<TextField
							labelText='Last Name'
							id='lastName'
							name='lastName'
							value={changingData?.lastName}
							onChange={handleChange}
							error={errors?.lastName}
						></TextField>
						<TextField
							labelText='Birthday'
							type='date'
							id='birthday'
							name='birthday'
							value={changingData?.birthday}
							onChange={handleChange}
							error={errors?.birthday}
						></TextField>
						<TextField
							labelText='Url'
							id='url'
							name='url'
							value={changingData?.url}
							onChange={handleChange}
							error={errors?.url}
						></TextField>
						<div className='d-grid gap-2 col-6 mx-auto'>
							<CustomLink to={'/'} isdisabled={String(!isValid)}>
								<button
									disabled={!isValid}
									className='btn btn-primary'
									onClick={handleSubmit}
								>
									{isHaveData ? 'Update' : 'Create'}
								</button>
							</CustomLink>
							{isHaveData && (
								<CustomLink to={'/'}>
									<button className='btn btn-secondary'>Back</button>
								</CustomLink>
							)}
						</div>
					</form>
				</div>
			</div>
			{isHaveData && (
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

export default EditForm
