import React from 'react'
import { Card ,Box,TextField,Typography} from '@mui/material'
import { Dispatch, SetStateAction } from "react";

const Motivate:React.FC<{editflag:boolean,task_id:string,taskdata:string,motivatetaskform:any,setmotivatetaskform:any}>
= ({editflag,task_id,taskdata,motivatetaskform,setmotivatetaskform}) => { 

  console.log("Motivate.tsx");
  
  const handlechange =(e:any) =>{

    setmotivatetaskform((mapstate:any)=>mapstate.map((v:{task_id:string,form:string})=>v.task_id===task_id?
    {...v,form:e.target.value}:v));
    // setmaintaskform([...maintaskform,{form:e.target.value}]);
    // setmaintaskform({...maintaskform,task_id:e.target.value})
    // console.log(motivatetaskform);
  }
    
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
              defaultValue={taskdata}
              onChange={handlechange}
            />
            :(<Typography>{taskdata}</Typography>)
          }
            </Box>
            
        </Card>
        )
}

export default Motivate
