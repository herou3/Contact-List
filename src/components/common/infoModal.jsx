import React from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

const InfoModel = ({ title, text, isOpen, handleClose }) => {
	return (
		<>
			<Modal show={isOpen} onHide={!isOpen}>
				<Modal.Header closeButton>
					<Modal.Title>{title}</Modal.Title>
				</Modal.Header>
				<Modal.Body>{text}</Modal.Body>
				<Modal.Footer>
					<Button variant='secondary' onClick={handleClose}>
						Ok
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	)
}

export default InfoModel
