import React from 'react'
import { Card ,Box,TextField} from '@mui/material'

const Motivate = () => {
    return (
        <Card sx={{
            width:"100%",
            minHeight:"100px",
            borderRadius:"5px",
    
        }}>
          <Box sx={{
            height:"30px",
            // backgroundColor:"#CCFF00",
            mr:2,
            ml:2,
            borderBottom:"0.3px solid #BDBDBD",
          }}>モチベータ</Box>
          <Box sx={{
            ml:2,
            mr:3
          }}>
          <TextField
              fullWidth
              id="standard-search"
              label="このタスクを入力してください"
              type="search"
              variant="standard"
            />
            </Box>
            
        </Card>
        )
}

export default Motivate
