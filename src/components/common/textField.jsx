import React, { useState } from "react"
import PropTypes from "prop-types"

const TextField = ({ labelText, type, name, value, onChange, error }) => {
  const getInputClasses = () => {
    return "form-control" + (error ? " is-invalid" : "")
  }
  return (
    <div className="mb-4">
      <label htmlFor={name}>{labelText}</label>
      <div className="input-group has-validation">
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className={getInputClasses()}
        />
        {error && <div className="invalid-feedback">{error}</div>}
      </div>
    </div>
  )
}

TextField.defaultProps = {
  type: "text"
}
 
export default TextField