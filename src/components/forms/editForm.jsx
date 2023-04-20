import React, { useState, useEffect } from "react"
import TextField from "../common/textField"
import { validator } from "../../utils/validator"

const EditForm = ({ data, validatorConfig, onChange, isHaveDate, onCompleteChange }) => {
  const [errors, setErrors] = useState({})
  const [isTryUpdate, setIsTryUpdate] = useState(false)
  const isValid = Object.keys(errors).length === 0
  const handleSubmit = (event) => {
    event.preventDefault()
    const isValid = validate()
    setIsTryUpdate(true)
    if (!isValid) {
      return
    }
    onCompleteChange()
  }

  useEffect(() => {
    if (isTryUpdate) {
      validate()
    }
  }, [data])

  const validate = () => {
    const errors = validator(data, validatorConfig)
    setErrors(errors)
    console.log(errors)
    return Object.keys(errors).length === 0
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="row justify-content-md-center">
          <h2>{isHaveDate ? "Update" : "Create"} User</h2>
          <form onSubmit={handleSubmit}>
            <TextField labelText="First Name" id="firstName" name="firstName" value={data.firstName} onChange={onChange} error={errors.firstName}></TextField>
            <TextField labelText="Last Name" id="lastName" name="lastName" value={data.lastName} onChange={onChange} error={errors.lastName}></TextField>
            <TextField labelText="Birthday" id="birthday" name="birthday" value={data.birthday} onChange={onChange} error={errors.birthday}></TextField>
            <TextField labelText="Url" id="url" name="url" value={data.url} onChange={onChange} error={errors.url}></TextField>
            <button disabled={!isValid} className="btn btn-primary w-100">{isHaveDate ? "Update" : "Create"}</button>
          </form>
        </div>
      </div>
    </div>
  )
}
 
export default EditForm