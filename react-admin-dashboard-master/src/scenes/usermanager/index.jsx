import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ColorModeContext, useMode } from "../../theme";
import {useTheme } from "@mui/material";
import { tokens } from "../../theme";

import { DataGrid } from '@mui/x-data-grid';
import  { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import scroll from '../../components/scroll';
import axios from "axios"; 



export default function SignUp() {

  const [users, setUsers] = useState([]);
  const [message, setMessage] = React.useState({ text: '', color: '' });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:4554/users');
      console.log("users");
      console.log(response.data);
      setUsers(response.data.users);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };


  const deleteUser = async (user) => {
    try {
      const response = await axios.delete(`http://localhost:4554/deleteuser/${user}`);
      console.log(response.data);
      fetchUsers();
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    try {
      // Send POST request to the backend
      const response = await axios.post('http://localhost:4554/adduser', {
        user: data.get('user'),
        password: data.get('password'),
      });
      fetchUsers();
      // Handle successful response
      setMessage({ text: 'Username was successfully added!', color: 'green' });

      const element = document.getElementById('custom-id');

      element.style.color = 'green';


    } catch (error) {

      if (error.response && error.response.status === 409) {
        // User already exists
        setMessage({ text: 'Username already exists!', color: 'red' });
        const element = document.getElementById('custom-id');

        element.style.color = 'red';
      }
      console.error('Error registering user:', error);  //check if the user is already registered   TODO
      // Handle error
    }
  };
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
  <>
    <scroll>
    <TableContainer component={Paper} sx={{ maxHeight: 540 }}>
      <Table stickyHeader sx={{ minWidth: 650 }}  aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontSize: '1.1rem', fontWeight: 'bold' }}> Username </TableCell>
            <TableCell align="right" sx={{ fontSize: '1rem', fontWeight: 'bold' }}>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((row) => (
            <TableRow
              key={row.user}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } ,
              backgroundColor: colors.primary[400],}}
            >
              <TableCell component="th" scope="row">{row.user}</TableCell>
              <TableCell align="right"><button onClick={() => deleteUser(row.user)}>Delete User</button ></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
</scroll>

    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />

        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Add New User
            </Typography>
          {message.text && (
            <Typography
              variant="body2"
              sx={{ color: message.color, textAlign: 'center' }}
            >
              {message.text}
            </Typography>
          )}
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="user"
                  label="username"
                  name="user"
                  autoComplete="username"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add User
            </Button >
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    </>
  );
}
