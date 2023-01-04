import { Link as RouterLink, useNavigate } from 'react-router-dom'
import React from 'react'
import { useState } from 'react'
import { useAuth } from 'AuthContext'
import RegistComplete from "RegistComplete"
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


function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const Register: React.FC = () => {
  const [user, setuser] = useState("");
  const [password, setpassword] = useState("");
  const url = "http://127.0.0.1:8000/api/v1/userRegist/"
  const Auth = useAuth();
  const navigate = useNavigate();

  // const userchange = (e: any) => {
  //   // user = e.target.value;
  //   setuser(e.target.value);
  //   // console.log(user);
  //   console.log(user);
  // }

  // const changePassword = (e: any) => {
  //   // user = e.target.value;
  //   setpassword(e.target.value);
  //   // console.log(user);
  //   console.log(password);
  // }

  // const regist = async () => {
  //   await fetch(url, {
  //     method: "POST",
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     credentials: 'include',
  //     body: JSON.stringify({ "email": user, "password": password })
  //     // body: JSON.stringify({ email: "admin@admin.com", password: "password" })
  //   }).then((res) => {

  //     if (res.status == 200) {
  //       if (Auth.login(user, password)) {
  //         // navigate("/registcomplete")
  //       }
  //     }


  //   })
  // }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    await fetch(url, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({ "email": data.get("email"), "password": data.get("password") })
    }).then((res) => {

      if (res.status == 200) {
        if (Auth.login(data.get("email"), data.get("password"))) {
          navigate("/registcomplete")
        }
      }
    })
  };



  return (
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
          新規登録
        </Typography>

        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
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
            ユーザー作成する
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                既にユーザーを持っていますか?
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 5 }} />
    </Container>
  )
}

export default Register
