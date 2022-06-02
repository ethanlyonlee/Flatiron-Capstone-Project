import {useState} from 'react'
import { useHistory } from 'react-router-dom'
import './SignUp.css'

function SignUp() {

    const history = useHistory()
    const [signUpParams, setSignUpParams] = useState({
        first_name: '',
        last_name: '',
        username: '',
        password: ''
    })
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState(null) 

    function submitHandler(e) {
        e.preventDefault()

        const configObject = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(signUpParams)
        }

        if(signUpParams.password === confirmPassword) {
            setError(null)
            fetch('/users', configObject)
            .then(res => {
                if(res.ok) {
                    res.json()
                    .then(() => {
                        history.push("/Login")
                        e.target.reset()
                    })
                } else {
                    res.json()
                    .then(json => {setError(json.error)})
                }
            })
        } else {
            setError('Passwords do not match. Please try again.')
        }
    }
    return(
        <div id="signup-box">
            <h1 id="signup_h1">Welcome! Please Sign Up.</h1>
                <form onSubmit={(e) => submitHandler(e)}>
                    <div>
                        <p id="signup2">First Name</p>
                        <input type="text" id="firstname-signup" name='first_name'placeholder="Enter First Name" onChange={e => setSignUpParams({...signUpParams, [e.target.name]: e.target.value})} required></input>
                        <p id="signup2">Last Name</p>
                        <input type="text" id="lastname-signup" name='last_name'placeholder="Enter Last Name" onChange={e => setSignUpParams({...signUpParams, [e.target.name]: e.target.value})} required></input>
                        <p id="signup2">Username</p>
                        <input type="text" id="username-signup" name='username'placeholder="Enter Username" onChange={e => setSignUpParams({...signUpParams, [e.target.name]: e.target.value})} required></input>
                        <p id="signup2">Password</p>
                        <input type="password" id="password-signup" name='password'placeholder="Enter Password" onChange={e => setSignUpParams({...signUpParams, [e.target.name]: e.target.value})} required></input>
                        <p id="signup2">Re-enter Password</p>
                        <input type="password" id="password-signup" placeholder="Enter Password" onChange={e => setConfirmPassword(e.target.value)} required></input>
                        <br></br>
                        <input type="submit" id="submit-signup" value="Sign Up"></input>
                        <br/>
                        {error ? <p>{error}</p> : null}
                    </div>
                </form>
                
        </div>
    )
}

export default SignUp;