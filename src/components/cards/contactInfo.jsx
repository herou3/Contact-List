import React from 'react'
import { Link } from 'react-router-dom'
import CustomLink from '../common/customLink'

/*
				onChangeMode={toggleChangeEditMode}
				onChange={handleChange}
				onCompleteChange={handleCompleteEdit}
				validatorConfig={validatorConfig}
				isHaveDate={isHaveData}
*/

const ContactInfo = ({
	data,
	onChangeMode,
	onChange,
	omCompleteChange,
	validatorConfig,
	isHaveDate
}) => {
	const checkDataStatus = () => {
		if (data.firstName || data.lastName || data.birthday || data.url) {
			return true
		}
		return false
	}

	const dataForEditForm = {
		data: data,
    validatorConfig: validatorConfig,
    isHaveDate: isHaveDate
	}
  console.log(dataForEditForm);
	const isUserData = checkDataStatus()

	return (
		<>
			<div className='container mt-5'>
				<div className='card mb-3'>
					<div className='card-header bg-transparent fs-2'>
						{isUserData ? data.lastName + ' ' + data.firstName : 'User card'}
					</div>
					{isUserData ? (
						<>
							<div className='card-body'>
								<div className='mb-1 row'>
									<label htmlFor='birthday' className='col-sm-3 col-form-label'>
										Birthday:
									</label>
									<h5 className='card-title' id='birthday'>
										{data.birthday}
									</h5>
								</div>
								<div className='mb-2 row'>
									<label htmlFor='url' className='col-sm-2 col-form-label'>
										Url:
									</label>
									<h5 className='card-title' id='url'>
										<a href={data.url} target='_blank' rel='noreferrer'>
											{data.url}
										</a>
									</h5>
								</div>
							</div>
							<div className='card-footer bg-transparent'>
								<CustomLink to={`/edit`} state={{ data: dataForEditForm }}>
									<button
										className='btn btn-primary w-20'
										onClick={onChangeMode}
									>
										Edit
									</button>
								</CustomLink>
							</div>
						</>
					) : (
						<div>
							<div className='card-body mt-2'>
								<h5 className='card-title'>No data...</h5>
							</div>
							<div className='card-footer bg-transparent'>
								<Link
									to={`/`}
									state={{
										data: data,
										onChange: onChange,
										omCompleteChange: omCompleteChange,
										validatorConfig: validatorConfig,
										isHaveDate: isHaveDate
									}}
								>
									<button
										className='btn btn-primary w-20'
										onClick={onChangeMode}
									>
										Create
									</button>
								</Link>
							</div>
						</div>
					)}
				</div>
			</div>
		</>
	)
}

export default ContactInfo
