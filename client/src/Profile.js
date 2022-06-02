import {useState} from 'react'
import { useHistory } from 'react-router-dom'
import Tickets from './Tickets'
// import Comments from './Comments'
import './Profile.css'

function Profile({user, setUser, setIsAuthenticated}) {
    const history = useHistory()
    const [editing, setEditing] = useState(false)
    const [error, setError] = useState(null)

  const [editProfileParams, setEditProfileParams] = useState({
        first_name: user.first_name,
        last_name: user.last_name,
        username: user.username,
        password: user.password,
    })

    function handleEditToggle() {
        setEditing(true)
    }

    function handleSubmit(e) {
        e.preventDefault()

        fetch(`/users/${user.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accepts': 'application/json'
            },
            body: JSON.stringify(editProfileParams)
        }).then(res => {
            if(res.ok) {
                res.json()
                .then((user) => {
                    setUser(user)
                    setEditing(false)
                })
            } else {
                res.json()
                .then(json => {setError(json.error)})
            }
        })
        window.confirm("Your profile has been updated!")
    }

    function handleDelete() {

    window.confirm("Do you want to delete your profile?") 
            fetch(`/users/${user.id}`, {
                method: 'DELETE'
            }).then(() => {
                history.push('/')
                setUser(null)
                setIsAuthenticated(false) 
            })
            window.confirm("Your profile has been deleted!")
        }
    
    const userData = (
        <div>
            {/* <h1>{user.first_name}'s Profile:</h1> */}
            {/* <h1>{user.first_name}'s Profile'</h1> */}
            <h3 id="profile-name">{user.first_name} {user.last_name}'s Profile</h3>
            {/* <h3 id="profile-name">Username: {user.username}</h3> */}
            <button onClick={handleEditToggle}>Edit Profile</button>
        </div>
    )

    const editUserData = (
        <form onSubmit={(e) => handleSubmit(e)}>
            <p>First Name</p>
            <input type="text" id="firstname-edit" name='first_name'placeholder="Enter First Name" value={editProfileParams.first_name} onChange={e => setEditProfileParams({...editProfileParams, [e.target.name]: e.target.value})} required></input>
            <p>Last Name</p>
            <input type="text" id="lastname-edit" name='last_name'placeholder="Enter Last Name" value={editProfileParams.last_name} onChange={e => setEditProfileParams({...editProfileParams, [e.target.name]: e.target.value})} required></input>
            <p>Username</p>
            <input type="text" id="username-edit" name='username'placeholder="Enter New Username" value={editProfileParams.username} onChange={e => setEditProfileParams({...editProfileParams, [e.target.name]: e.target.value})} required></input>
            <p>Password</p>
            <input type="password" id="password-edit" name='password'placeholder="New Password" value={editProfileParams.password} onChange={e => setEditProfileParams({...editProfileParams, [e.target.name]: e.target.value})} required></input>
            <input type='submit' value="Modify" id='submit-user-changes'></input>
            {error ? <p>{error}</p> : null}
        </form>
    )
    return(
        <div id='user-data'>
            {editing ? editUserData : userData}
            <button onClick={handleDelete}>Delete</button>
            <Tickets user={user}/>
            {/* <Comments user={user}/> */}
            {/* <p id="user-comments"> {user.first_name}'s comments</p> */}
            {/* <Comments user={user} setUser={setUser}/> */}
        </div>
    )
}

export default Profile;