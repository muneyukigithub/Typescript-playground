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
import { useNavigate } from 'react-router-dom';
import { useAuth } from 'AuthContext';
import { useState } from 'react';

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

const theme = createTheme();

export default function SignIn() {

    const [user, setuser] = useState("");
    const [password, setpassword] = useState("");
    const Auth = useAuth();
    const navigate = useNavigate();
    const url = ""
    // console.log(Auth.login("admin", "pass"));

    const changeuser = (e: any) => {
        // user = e.target.value;
        setuser(e.target.value);
        // console.log(user);
        console.log(user);
    }

    const changepassword = (e: any) => {
        // user = e.target.value;
        setpassword(e.target.value);
        // console.log(user);
        console.log(password);
    }

    const tes = (username: any, password: any) => {
        console.log(username);
        console.log(password);
    }

    const signin = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        console.log("signin 到達")
        Auth.login(data.get('email'), data.get('password')).then((response: any) => {
            console.log(response)
            // if (!(loginuser === "")) {
            //     navigate("/main")

            // }            
        })

    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);




        const loginuser = (await Auth.login(data.get('email'), data.get('password'))).loginuser
        console.log(loginuser)
        if (!(loginuser === "")) {
            navigate("/main")

        }



        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
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
                    ログイン
                </Typography>
                <Box component="form" onSubmit={signin} noValidate sx={{ mt: 1 }}>
                    <TextField
                        onChange={changeuser}
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        onChange={changepassword}
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    {/* <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        /> */}
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    // onSubmit={signin}
                    >
                        ログインする
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                パスワードを忘れた?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="/Regist" variant="body2">
                                {"アカウントを持っていない方はこちら"}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>

    );
}