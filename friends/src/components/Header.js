import './header.css'
import { useHistory } from "react-router-dom";
import axios from 'axios'

const Header = () => {
    console.log("render Header")
    const history = useHistory()

    const handleLogout = () => {
        axios.post('http://localhost:5000/api/logout', {
                headers: {
                    authorization: localStorage.getItem('token')
                }
            })
        .then(() => {
            localStorage.removeItem('token')
            history.push('/login')
        })

        .catch(err => console.log(err))
    }

    return(
        <div className="header">
            <p>This is Auth practice!</p>
            <button type="button" onClick={() => history.push('/protected')}>my friend list</button>
            <button type="button" onClick={() => history.push('/login')}>Login</button>
            <button type="button" onClick={() => handleLogout()} >Logout</button>
        </div>
    )
}

export default Header