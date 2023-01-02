import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom'
import { Button } from '@mui/material';


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

export const Front = () => {
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

                    <Link
                        component={RouterLink}
                        to={"/login"}
                        color="primary"
                        variant='h5'
                        gutterBottom
                        sx={{ textDecoration: "None", pt: 2 }}

                    >
                        {"ログインする"}
                    </Link>
                </Box>

            </Container>
            <Box
                component="footer"
                sx={{
                    py: 3,
                    px: 2,
                    mt: 'auto',
                    backgroundColor: (theme) =>
                        theme.palette.mode === 'light'
                            ? theme.palette.grey[200]
                            : theme.palette.grey[800],
                }}
            >
                <Container maxWidth="sm">
                    <Typography variant="body1">
                        My sticky footer can be found here.
                    </Typography>
                    <Copyright />
                </Container>
            </Box>
        </Box>
    );
}