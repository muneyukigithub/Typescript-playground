import { AppBar, Toolbar, Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";


export const Header = () => {

    return <AppBar position="relative" sx={{ backgroundColor: '#fff', p: 0, boxShadow: '0', position: "fixed", top: 0 }}>
        <Toolbar sx={{ ml: '16px' }}>
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

            <Box sx={{ flexGrow: 1 }} />

            <Box sx={{ display: 'flex', mr: "20px" }}>
                {/* <Button variant="contained" sx={{ width: '100px', ml: '20px' }}> */}
                <Link to="/">
                    使い方
                </Link>
                {/* </Button> */}

                {/* {username ? 
          <Typography sx={{ color: "red" }}>
            <Link to="/profile">
              {username}
            </Link>
          </Typography>
                        <Button variant="contained" sx={{ width: '100px', ml: '20px' }} onClick={logout}>
                        ログアウト
                      </Button>
          : <Link to="/main" ></Link>

        } */}

            </Box>
        </Toolbar>
    </AppBar>
};