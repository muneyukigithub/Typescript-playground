import { Button, Card, Paper, Theme } from '@mui/material';
import { useAuth } from 'AuthContext';
import React from 'react'
// import { Link, useNavigate } from 'react-router-dom'
import UserDeactivateComplete from 'UserDeactivateComplete';

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom'
import { makeStyles, createStyles } from '@material-ui/core/styles';

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

// const useStyles = makeStyles((theme: Theme) => createStyles({
//     card: {
//         margin: 5,
//         padding: 5
//     }
// })
// );

const useStyles = makeStyles({
    root: {
        borderRadius: 19,
    }
})



// 呼び出しシグネチャ（アロータイプ）
type Func5 = (theme: Theme) => object;

// 呼び出しシグネチャ、戻り値がvoid
type Func6 = (a: string) => void;

export const Profile = (props: any) => {
    const classes = useStyles();

    // const navigate = useNavigate()
    // const Auth = useAuth();
    const url = "http://127.0.0.1:8000/UserDeactivate/"
    // const UserDeactivate = async () => {
    //     await fetch(url, {
    //         method: "POST",
    //         headers: { 'Content-Type': 'application/json' },
    //         // body: JSON.stringify({ "email": Auth.user })
    //     }).then((res) => {
    //         if (res.status === 200) {
    //             console.log(res.status);
    //             // return Auth.logout()
    //             return "e"

    //             // Promise.resolve(r)

    //         } else {
    //             return

    //         }
    //     }).then((res) => {
    //         console.log(res);
    //         if (res) {
    //             navigate("/UserDeactivateComplete", { state: { user: res } })
    //         }

    //         // navigate("/UserDeactivateComplete")

    //     })
    // }





    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',

            }}
        >

            <CssBaseline />
            <Container component="main" sx={{ mt: 8, mb: 2, }} maxWidth="sm">
                <Card className={classes.root}>


                </Card>
                <Typography variant="h2" component="h1" gutterBottom>
                    Sticky footer
                </Typography>
                <Typography variant="h5" component="h2" gutterBottom>
                    {'Pin a footer to the bottom of the viewport.'}
                    {'The footer will move as the main element of the page grows.'}
                </Typography>
                <Typography variant="body1" gutterBottom>Sticky footer placeholder.</Typography>
                <Box>
                    {/* <RounterLink to="/login">
                    <Typography variant="h5" color="primary">ログインする</Typography>
                </RounterLink> */}
                </Box>
            </Container>
        </Box >
    )
}

export default Profile

