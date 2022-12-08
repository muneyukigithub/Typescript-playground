import React from 'react'
import { Dispatch, SetStateAction } from "react";

import { Card ,Box,TextField, Typography,Button} from '@mui/material'

const Maintask:React.FC<{editflag:boolean,seteditflag:Dispatch<SetStateAction<boolean>>,taskdata:object}> 
= ({editflag,seteditflag,taskdata}) => {



  return (

    <Card sx={{
        width:"100%",
        height:"100px",
        borderRadius:"5px",

    }}>
      <Box sx={{
        height:"30px",
        // backgroundColor:"#CCFF00",
        mr:2,
        ml:2,
        borderBottom:"0.3px solid #BDBDBD",
      }}>やることフェーズ</Box>
      <Box sx={{
        ml:2,
        mr:3
      }}>

        {editflag ? (
      <TextField
          fullWidth
          id="standard-search"
          label="このタスクを入力してください"
          type="search"
          variant="standard"
        />
        )
        :(<Typography>確定内容</Typography>)

}
        </Box>
        
    </Card>
  )
}

export default Maintask
