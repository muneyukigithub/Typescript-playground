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
    const url = "http://127.0.0.1:8000/api/v1/UserDeactivate/"
    const UserDeactivate = async () => {
        await fetch(url, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ "email": Auth.user })
        }).then((res) => {
            if (res.status === 200) {
                console.log(res.status);
                // return Auth.logout()
                return "e"
                // Promise.resolve(r)
                // return

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
                minHeight: '100vh',
                backgroundColor: '#EEEEEE',
                pt: 15
            }}
        >

            <CssBaseline />
            <Container component="main" maxWidth="sm" >
                <Card sx={{ display: "flex", flexDirection: "column", alignItems: "center" }} >
                    <Avatar
                        alt=""
                        src="diary.jpeg"
                        sx={{ width: 200, height: 200, mt: 5 }}
                    />

                    <CardContent sx={{ width: "100%", p: 0, display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <Typography variant="h6" sx={{ display: "inline-block" }}>
                            メールアドレス  :

                        </Typography>
                        <Typography variant="h6" color="#1976d2" sx={{ display: "inline-block" }} gutterBottom>
                            {Auth.user}
                        </Typography>
                        <Box sx={{ borderTop: "1px solid gray", borderBottom: "1px solid gray", width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <Typography onClick={UserDeactivate} color="darkgrey" variant="h6" sx={{ display: "inline-block" }} gutterBottom>
                                アカウントの削除
                            </Typography>
                        </Box>
                    </CardContent>
                </Card>

                {/* <Box sx={{ height: "20px", backgroundColor: "dodgerblue" }}></Box>
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
                                    登録したEmailアドレス
                                </Typography>
                                <Typography variant="h6" sx={{ ml: "20px", fontWeight: 50 }} gutterBottom>
                                    {Auth.user}
                                </Typography>
                          
                            </CardContent>
                        </Grid>
                    </Grid> */}

                <Link
                    component={RouterLink}
                    to={"/main"}
                    color="primary"
                    variant='h6'

                    sx={{ textDecoration: "None", pt: 2 }}
                >ホームへ
                </Link>

            </Container>
        </Box >
    )
}

export default Profile

