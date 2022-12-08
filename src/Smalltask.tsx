import React from 'react'
import { Card ,Box,TextField,Button, List, ListItem,Typography } from '@mui/material'
import { Dispatch, SetStateAction } from "react";

import Smalltaskdata from 'SmallTaskdata'
import AddIcon from '@mui/icons-material/Add';

import DeleteIcon from '@mui/icons-material/Delete';

import { useState } from 'react'
import { red } from '@mui/material/colors';

const Smalltask:React.FC<{editflag:boolean,seteditflag:Dispatch<SetStateAction<boolean>>}> = ({editflag}) => {

  const [todocount,settodocount] = useState(2);

  // const addsmalltaskform = () => {
  //   settodocount(todocount+1);
  // }

  // const deletesmalltaskform = () => {
  //   settodocount(todocount-1);
  // }

  const getformlist = () =>{
    const formlist = [];
    for(let i=0;i<todocount;i++){
      formlist.push(<ListItem>
        <TextField
        fullWidth
        id="standard-search"
        label="このタスクを入力してください!"
        type="search"
        variant="standard"/>

        <Button onClick={()=>{settodocount(todocount-1)}}>
        <DeleteIcon sx={{color:red[500],ml:2}}/>    
        </Button>

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

      {editflag?
      <List disablePadding>
      {formlist}
      </List> 
      :<Typography>確定内容</Typography>
      }

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
      {editflag && <Button variant="outlined" size="small" onClick={()=>{settodocount(todocount+1)}}>細分化タスクの追加</Button>}
      </Box>
      
  </Card>
  )
}

export default Smalltask;