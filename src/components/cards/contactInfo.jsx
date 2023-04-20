import React from 'react'

const ContactInfo = ({ firstName, lastName, birthday, url, onChangeMode }) => {
	const checkDataStatus = () => {
		if (firstName || lastName || birthday || url) {
			return true
		}
		return false
	}

	const isUserData = checkDataStatus()

	return (
		<>
			<div className='container mt-5'>
				<div className='card mb-3'>
					<div className='card-header bg-transparent fs-2'>
						{isUserData ? lastName + ' ' + firstName : 'User card'}
					</div>
					{isUserData ? (
						<>
							<div className='card-body'>
								<div className='mb-1 row'>
									<label htmlFor='birthday' className='col-sm-2 col-form-label'>
										Birthday:
									</label>
									<h5 className='card-title' id='birthday'>
										{birthday}
									</h5>
								</div>
								<div className='mb-2 row'>
									<label htmlFor='url' className='col-sm-2 col-form-label'>
										Url:
									</label>
									<h5 className='card-title' id='url'>
										<a href={url} target='_blank' rel='noreferrer'>
											{url}
										</a>
									</h5>
								</div>
							</div>
							<div className='card-footer bg-transparent'>
								<button className='btn btn-primary w-20' onClick={onChangeMode}>
									Edit
								</button>
							</div>
						</>
					) : (
						<div>
							<div className='card-body mt-2'>
								<h5 className='card-title'>No data...</h5>
							</div>
							<div className='card-footer bg-transparent'>
								<button className='btn btn-primary w-20' onClick={onChangeMode}>
									Create
								</button>
							</div>
						</div>
					)}
				</div>
			</div>
		</>
	)
}

export default ContactInfo
