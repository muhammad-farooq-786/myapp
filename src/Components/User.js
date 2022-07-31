const User = ({user, onDelete, onToggle}) => {
  return (
    <div className={`${user.reminder ? 'user-reminder' : '' }`} onDoubleClick={() => onToggle(user.id)}>
      <h3>
        {user.name}<br/>
      </h3>
      <button className="btn btn-danger" onClick={() => onDelete(user.id)}>delete</button>
    </div>
  )
}

export default User
