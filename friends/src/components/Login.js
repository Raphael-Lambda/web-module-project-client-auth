import React, { useState } from "react"
import { useHistory } from "react-router"
import axios from 'axios'

const Login = () => {

    const [ credentials, setCredentials] = useState({
        username: '',
        password: ''
    })

    const history = useHistory()

    const handleChange = e => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    const login = e => {
        e.preventDefault()
        console.log("credentials", credentials)
        axios.post('http://localhost:5000/api/login', credentials)
            .then((res)=>{
                console.log('res:', res)
                localStorage.setItem('token', res.data.payload)
                setCredentials({
                    username: '',
                    password: ''
                })
                history.push('/protected')
            })
            .catch(err => console.log(err))
        //do some stuff
        
    }

    return(

        <form>
            <input type='text' value={credentials.username} placeholder="userName" name="username" onChange={handleChange}/>
            <input type='password' value={credentials.password} placeholder="password" name="password" onChange={handleChange}/> 
            <button onClick={login}> Login! </button>
        </form>
    )
}

export default Login