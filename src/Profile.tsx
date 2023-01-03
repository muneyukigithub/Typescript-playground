import { Avatar, Button, Card, CardContent, CardMedia, Grid, Paper, Theme } from '@mui/material';
import { useAuth } from 'AuthContext';
import React from 'react'
import { useNavigate } from 'react-router-dom'
import UserDeactivateComplete from 'UserDeactivateComplete';

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom'
// import { makeStyles } from '@mui/styles';
// import { makeStyles } from '@mui/material';
// import { makeStyles, createStyles } from '@material-ui/core';

const Copyright = () => {
    return (
        <Typography variant="body2" color="text.secondary">
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

// 呼び出しシグネチャ（アロータイプ）
type Func5 = (theme: Theme) => object;

// 呼び出しシグネチャ、戻り値がvoid
type Func6 = (a: string) => void;

export const Profile = (props: any) => {

    const navigate = useNavigate()
    const Auth = useAuth();
    const url = "http://127.0.0.1:8000/UserDeactivate/"
    const UserDeactivate = async () => {
        await fetch(url, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            // body: JSON.stringify({ "email": Auth.user })
        }).then((res) => {
            if (res.status === 200) {
                console.log(res.status);
                // return Auth.logout()
                return "e"

                // Promise.resolve(r)

            } else {
                return

            }
        }).then((res) => {
            console.log(res);
            if (res) {
                navigate("/UserDeactivateComplete", { state: { user: res } })
            }

            // navigate("/UserDeactivateComplete")

        })
    }

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',

            }}
        >

            <CssBaseline />
            <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
                <Card>
                    <Box sx={{ height: "20px", backgroundColor: "dodgerblue" }}></Box>
                    {/* <Grid container spacing={0} sx={{ display: "flex", alignItems: "center" }}> */}
                    <Grid container spacing={0}>
                        <Grid item xs={6}>
                            <Avatar
                                alt=""
                                src="diary.jpeg"
                                sx={{ width: 160, height: 160, m: 5 }}
                            />

                        </Grid>
                        <Grid item xs={6} sx={{ borderLeft: "2px dotted gray", display: "flex", justifyContent: "center", flexDirection: "column" }}>
                            <CardContent>
                                <Typography variant="h5" gutterBottom>
                                    Email
                                </Typography>
                                <Typography variant="h6" sx={{ ml: "20px", fontWeight: 50 }} gutterBottom>
                                    admin@admin.com
                                </Typography>
                                {/* <Typography variant="h6" sx={{ mt: 3 }}>
                                    メニュー
                                </Typography>
                                <Button variant="contained" sx={{ borderRadius: 16 }}>Email変更</Button>
                                <Button variant="contained" sx={{ borderRadius: 16 }}>パスワード変更</Button> */}

                            </CardContent>
                        </Grid>
                    </Grid>

                    {/* 
                    <CardMedia
                        component="img"
                        src=''
                        title=''
                            sx={{ minHeight: '30vh' }} /> */}



                </Card>
                <RouterLink to="/main">ホームへ</RouterLink>

            </Container>
        </Box >
    )
}

export default Profile

