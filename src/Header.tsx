import { AppBar, Toolbar, Box, Typography, Link, Button } from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { useAuth } from 'AuthContext'

export const Header = () => {
    const Auth = useAuth();
    const username = Auth.user;
    return <AppBar sx={{ backgroundColor: "Transparent", top: 0, position: "static" }}>
        <Toolbar sx={{ minHeight: "16px" }}>
            {/* <Box
        sx={{
          backgroundColor: '#EEEEEE',
          borderRadius: '46px',
          width: '70%',
          display: 'inline-flex',
        }}
      >
        <Box
          sx={{
            py: '5px',
            pl: '25px',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <SearchIcon color="primary" />
        </Box>
        <InputBase placeholder="Search…" />
      </Box> */}

            {/* <Box sx={{ flexGrow: 1 }} /> */}

            {/* <Box sx={{ display: 'flex', mr: "20px", width: "100%" }}> */}
            {/* <Button variant="contained" sx={{ width: '100px', ml: '20px' }}> */}

            <Link
                component={RouterLink}
                to={"/"}
                color="primary"
                sx={{ textDecoration: "None" }}
            >
                使い方
            </Link>

            {/* </Button> */}

            {username ?
                <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
                    <Link
                        component={RouterLink}
                        to="/Profile"
                        color="primary"
                        sx={{ textDecoration: "None", mr: 2 }}
                    >
                        {username}  /
                    </Link>
                    <Button variant="outlined" onClick={Auth.logout} color="info">ログアウト</Button>

                </Box>
                : <Link></Link>
            }

            {/* </Box> */}
        </Toolbar>
    </AppBar>
};