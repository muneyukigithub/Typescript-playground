import React from 'react'
import { Card ,Box,TextField,Button, List, ListItem,Typography } from '@mui/material'
import { Dispatch, SetStateAction } from "react";

import Smalltaskdata from 'SmallTaskdata'
import AddIcon from '@mui/icons-material/Add';

import DeleteIcon from '@mui/icons-material/Delete';

import { useState } from 'react'
import { red } from '@mui/material/colors';
import { useEffect } from 'react';

interface form {
	task_id:string
  form: string[]
}



interface item {
  smalltask_id: string
	smalltask: string[]
	task_id:string
}


const Smalltask:React.FC<{editflag:boolean,task_id:string,taskdata:string[],smalltaskform:form[],setsmalltaskform:any,addsmalltask:any}>
= ({editflag,task_id,taskdata,smalltaskform,setsmalltaskform,addsmalltask}) => {

  console.log("Smalltask.tsx");

  // const [todocount,settodocount] = useState(2);
  // const [t,sett] = useState([{id:"0",data:""}]);


  // const addsmalltaskform = () => {
  //   settodocount(todocount+1);
  // }

  // const deletesmalltaskform = () => {
  //   settodocount(todocount-1);
  // }

  // const newtaskdata = taskdata.slice();
  let newtaskdata:string[] = [];

  for(let i=0;i<smalltaskform.length;i++){
    // console.log(smalltaskform[i].task_id);
    console.log("useEffect");

    if(smalltaskform[i].task_id===task_id){
      newtaskdata = smalltaskform[i].form.slice();
      

      // setsmalltaskform((mapstate:any)=>mapstate.map(
      //   (v:{task_id:string,form:string})=>v.task_id===task_id
      //   ?{...v,form:newtaskdata}:v));

        // console.log(smalltaskform[i].form.slice());
        
    }

  }

  
  // useEffect(()=>{

  //   for(let i=0;i<smalltaskform.length;i++){
  //     // console.log(smalltaskform[i].task_id);
  //     console.log("useEffect");

  //     if(smalltaskform[i].task_id===task_id){
  //       newtaskdata = smalltaskform[i].form.slice();
        

  //       setsmalltaskform((mapstate:any)=>mapstate.map(
  //         (v:{task_id:string,form:string})=>v.task_id===task_id
  //         ?{...v,form:newtaskdata}:v));

          // console.log(smalltaskform[i].form.slice());
          
    //   }

    // }

    // console.log(newtaskdata);
    // console.log(smalltaskform);
 

  // },[])






  const handlechange = (e:any) =>{
    console.log(smalltaskform); 

    
    // const newtaskdata = taskdata.slice();
    // newtaskdata[e.]



    console.log(newtaskdata);
    newtaskdata[e.target.id]=e.target.value;
    setsmalltaskform((mapstate:any)=>mapstate.map(
      (v:{task_id:string,form:string[]})=>v.task_id===task_id
      ?{...v,form:newtaskdata}:v));
    

    // console.log(smalltaskform);
    

    // for(let i=0;i<t.length;i++){
    //   console.log(t[i].id);
    //   // console.log();
    //   if(t[i].id===e.target.id){
    //     // console.log("一致");
    //     t[i].data = e.target.value;
    //     sett(t);
    //     console.log(t);
    //     return;
    //   }
    // }

    
    // 脳内で実際に新しいものを作る

    // sett([...t,{id:String(t.length),data:""}]);

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
        id={String(index)}
        label="このタスクを入力してください!"
        type="search"
        variant="standard"
        defaultValue={value}
        onChange={handlechange}
        />

        <Button>
        <DeleteIcon sx={{color:red[500],ml:2}}/>    
        </Button>
      </ListItem>)

      typolist.push(
      <ListItem>
        <Typography>{value}</Typography> 
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
      {editflag && <Button variant="outlined" size="small" id={task_id} onClick={addsmalltask}>細分化タスクの追加</Button>}
      </Box>
      
  </Card>
  )
}

export default Smalltask;