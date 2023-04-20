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
      <div className="container mt-5">
        <div className="card mb-3">
          <div className="card-header bg-transparent fs-4">User card</div>
          {isUserData ? (
            <>
              <div className="card-body">
                <h5 className="card-title">{firstName}</h5>
                <h5 className="card-title">{lastName}</h5>
                <h5 className="card-title">{birthday}</h5>
                <h5 className="card-title">{url}</h5>
              </div>
              <div className="card-footer bg-transparent">
                <button className="btn btn-primary w-20" onClick={onChangeMode}>Edit</button>
              </div>
            </>
          ) :
          <div>
            <div className="card-body mt-2">
              <h5 className="card-title">No data...</h5>
            </div>
            <div className="card-footer bg-transparent">
              <button className="btn btn-primary w-20" onClick={onChangeMode}>Create</button>
            </div>
           </div>
          }
        </div>
      </div>
    </>
  )
}
 
export default ContactInfo