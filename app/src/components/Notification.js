const Notification = ({ message, feedback = 'good' }) => {
  if (message === null) {
    return null
  }
  const tipo = feedback === 'good' ? 'success' : 'error'

  return (
    <div className={tipo}>
      {message}
    </div>
  )
}

export default Notification
