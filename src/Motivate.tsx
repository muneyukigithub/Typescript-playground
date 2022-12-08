import React from 'react'
import { Card ,Box,TextField,Typography} from '@mui/material'
import { Dispatch, SetStateAction } from "react";



const Motivate:React.FC<{editflag:boolean,seteditflag:Dispatch<SetStateAction<boolean>>,taskdata:object}> = ({editflag,seteditflag,taskdata}) => {
    
    
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

              
          {editflag?
          <TextField
              fullWidth
              id="standard-search"
              label="このタスクを入力してください"
              type="search"
              variant="standard"
            />
            :(<Typography>確定内容</Typography>)
          }
            </Box>
            
        </Card>
        )
}

export default Motivate
