import React from 'react'
import { Card ,Box,TextField,Button, List, ListItem,Typography } from '@mui/material'
import { Dispatch, SetStateAction } from "react";

import Smalltaskdata from 'SmallTaskdata'
import AddIcon from '@mui/icons-material/Add';

import DeleteIcon from '@mui/icons-material/Delete';

import { useState } from 'react'
import { red } from '@mui/material/colors';

interface item {
  smalltask_id: string
	smalltask: string
	task_id:string
}

const Smalltask:React.FC<{editflag:boolean,taskdata:item[]}> = ({editflag,taskdata}) => {

  const [todocount,settodocount] = useState(2);
  const [t,sett] = useState([{id:"0",data:""}]);


  // const addsmalltaskform = () => {
  //   settodocount(todocount+1);
  // }

  // const deletesmalltaskform = () => {
  //   settodocount(todocount-1);
  // }

  const handlechange = (e:any) =>{
    for(let i=0;i<t.length;i++){
      console.log(t[i].id);
      // console.log();
      if(t[i].id===e.target.id){
        // console.log("一致");
        t[i].data = e.target.value;
        sett(t);
        console.log(t);
        return;
      }
    }

    
    // 脳内で実際に新しいものを作る

    sett([...t,{id:String(t.length),data:""}]);
    console.log(t);
    // console.log(e.target.id);
  }

  const getformlist = () =>{

    const formlist:any[] = [];
    const typolist:any[] = [];

    // for(let i=0;i<todocount;i++){
      taskdata.map((value,index)=>{

      formlist.push(
      <ListItem>
        <TextField
        fullWidth
        id={value.smalltask_id}
        label="このタスクを入力してください!"
        type="search"
        variant="standard"
        onChange={handlechange}
        />

        <Button onClick={()=>{settodocount(todocount-1)}}>
        <DeleteIcon sx={{color:red[500],ml:2}}/>    
        </Button>
      </ListItem>)

      typolist.push(
      <ListItem>
        <Typography>{value.smalltask}</Typography> 
        </ListItem>)
    })
    return [formlist,typolist] 
  }

  const [formlist,typolist]  = getformlist();

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
      :<List disablePadding>
      <Typography>
        {typolist}
      </Typography>
      </List> 
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