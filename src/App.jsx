import React from 'react'
import { Route, Routes } from 'react-router-dom'
import EditForm from './components/forms/editForm'
import ContactCard from './layouts/contactCard'

function App() {
	return (
		<Routes>
      <Route path=''>
        <Route path='' element={<ContactCard />} />
        <Route path='edit' element={<EditForm />} />
			  <Route path='create' element={<EditForm />} />
      </Route>
		</Routes>
	)
}

export default App
