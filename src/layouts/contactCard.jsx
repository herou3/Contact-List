import React, { useState } from "react"
import { validatorConfig } from "../models/validatorConfig"
import ContactInfo from "../components/cards/contactInfo"
import EditForm from "../components/forms/editForm"

const ContactCard = () => {
  const [data, setData] = useState({ firstName: "", lastName: "", birthday: "", url: "" })
  const [currentData, setCurrentData] = useState(data)
  const [isEditMode, setIsEditMode] = useState(false)
  const [isHaveData, setIsHaveData] = useState(false)

  const handleChange = ({ target }) => {
    setCurrentData((prevState) => ({
      ...prevState,
      [target.name]: target.value
    }))
  }

  const handleCompleteEdit = () => {
    setData(currentData)
    setIsHaveData(true)
    toggleChangeEditMpde()
  }

  const toggleChangeEditMpde = () => {
    setIsEditMode((prevState) => !prevState)
  }

  return (
    <>
    {!isEditMode
      ? <ContactInfo firstName={data.firstName} lastName={data.lastName} birthday={data.birthday} url={data.url} onChangeMode={toggleChangeEditMpde} />
      : <EditForm data={currentData} validatorConfig={validatorConfig} isHaveDate={isHaveData} onChange={handleChange} onCompleteChange={handleCompleteEdit} />
    }
    </>
  )
}
 
export default ContactCard