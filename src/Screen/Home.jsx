import React, { useEffect, useState } from 'react'
import Tables from '../Components/Table'
import axios from 'axios'
import { Box, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigates = useNavigate()
    const [userData, setUserData] = useState([])

    useEffect(()=>{
        axios
        .get("http://localhost:3000/users")
        .then(res => setUserData(res.data))
        .catch(err => console.log(err))
    },[])
    console.log(userData)
  return (
    <Box>
      <Button onClick={() => navigates('./create')}  sx={{marginBottom:5,float:'right',marginTop: 5}} variant='contained'>Create New User</Button>
      <Tables data={userData}/>
    </Box>
  )
}

export default Home