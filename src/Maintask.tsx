import React, { useState } from 'react'
import { Dispatch, SetStateAction } from "react";

import { Card ,Box,TextField, Typography,Button} from '@mui/material'

interface maintaskstate {
  task_id:string
}

const Maintask:React.FC<{editflag:boolean,task_id:string,taskdata:string,maintaskform:any,setmaintaskform:any}>
= ({editflag,task_id,taskdata,maintaskform,setmaintaskform}) => {

  // ,changehandle:(event:any)=>void

  console.log("Maintask.tsx");

  const handlechange =(e:any) =>{
    
    // maintaskform = e.target.value;
    // const newform = maintaskform.slice();
    // newform[0].form = e.target.value;
    // settasks((prevstate)=>
    // prevstate.map((value)=>value.task_id === e.target.id? 
    // {...value,edit:!value.edit}:value))

    setmaintaskform((mapstate:any)=>mapstate.map((v:{task_id:string,form:string})=>v.task_id===task_id?
    {...v,form:e.target.value}:v));
    // setmaintaskform([...maintaskform,{form:e.target.value}]);
    // setmaintaskform({...maintaskform,task_id:e.target.value})
    console.log(maintaskform);
  }



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
          defaultValue={taskdata}
          onChange={handlechange}
        />
        )
        :(<Typography>{taskdata}</Typography>)

}
        </Box>
        
    </Card>
  )
}

export default Maintask
