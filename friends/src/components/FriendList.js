import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";

import axiosWithAuth from './axiosAuth'


const FriendList = () => {

    const [friendList, setFriendList] = useState([])

    console.log(friendList)
    useEffect(() => {
        console.log('setting up friendlist')
        const token = localStorage.getItem('token')
        console.log('token', token)
        if(token){
            axiosWithAuth()
            .get('/friends')
            .then(resp => setFriendList(resp.data))
            .catch(err => console.log(err))
        }
    }, [])

    return(
        <>
            <ul>
                {friendList? friendList.map(friend => {return(<li>{friend.name}</li>)}):<p>Please login to see your friendlist</p>}
            </ul>
        </>
    )

}

export default FriendList