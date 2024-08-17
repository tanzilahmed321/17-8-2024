import React, { useEffect, useState } from 'react';
import { Button, Paper, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: '',
    username: '',
    email: '',
    phone: '',
  });

  useEffect(() => {
    axios
      .get(`http://localhost:3000/users/${id}`)
      .then((res) => setUserData(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3000/users/${id}`, userData)
      .then(() => {
        alert('User successfully updated');
        navigate('/');
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Paper elevation={24} sx={{ margin: 15, padding: 5 }}>
          <Typography variant="h4" sx={{ marginBottom: 5 }}>
            Edit User
          </Typography>
          <TextField
            value={userData.name}
            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
            sx={{ mb: 3 }}
            fullWidth
            label="Full Name"
          />
          <TextField
            value={userData.username}
            onChange={(e) =>
              setUserData({ ...userData, username: e.target.value })
            }
            sx={{ mb: 3 }}
            fullWidth
            label="User Name"
          />
          <TextField
            value={userData.email}
            onChange={(e) => setUserData({ ...userData, email: e.target.value })}
            sx={{ mb: 3 }}
            fullWidth
            label="Email"
          />
          <TextField
            value={userData.phone}
            onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
            sx={{ mb: 3 }}
            fullWidth
            label="Phone"
          />
          <Button variant="contained" type="submit">
            Update
          </Button>
        </Paper>
      </form>
    </div>
  );
};

export default EditUser;