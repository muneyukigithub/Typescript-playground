import React from 'react'
import { Card ,Box,TextField,Button, List, ListItem } from '@mui/material'

import Smalltaskdata from 'SmallTaskdata'
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react'

const Smalltask:React.FC = (todo,edit) => {

  const [todocount,settodocount] = useState(2);

  const addsmalltaskform = (event) => {
    
  }

  const getformlist = () =>{
    const formlist = [];
    for(let i=0;i<todocount;i++){
      formlist.push(<ListItem>
        <TextField
        fullWidth
        id="standard-search"
        label="このタスクを入力してください"
        type="search"
        variant="standard"/>
        </ListItem>)
    }
    return formlist  
  }

  const formlist = getformlist();


  return (
    <Card sx={{
      width:"100%",
      minHeight:"100px",
      borderRadius:"5px",
      justifyContent:"center",
  }}>
    <Box sx={{
      height:"30px",
      // backgroundColor:"#CCFF00",
      mr:2,
      ml:2,
      borderBottom:"0.3px solid #BDBDBD",
    }}>細分化</Box>
    <Box sx={{
      ml:2,
      mr:3,
      textAlign:"center",
    }}>

      {edit?
    <List disablePadding>

      {formlist}

    </List>  
      
      :<p>w</p>}

    {/* <TextField
        fullWidth
        id="standard-search"
        label="このタスクを入力してください"
        type="search"
        variant="standard"/> */}
        
        {/* <Box sx={{
          border:"2px solid red",

        }}> */}
      {/* <AddIcon fontSize='large' color="primary"/> */}
      {/* </Box> */}
      <Button variant="outlined" size="small" onClick={}>細分化タスクの追加</Button>
      </Box>
      
      
  </Card>
  )
}

export default Smalltask;