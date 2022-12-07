import React from "react";
import { Card,Box, Typography } from "@mui/material";
import { Checkbox } from "@mui/material";

const Sample:React.FC= () =>{

    return <Card
    sx={{  
        backgroundColor:"#F3EFE0",
        width:"160px",
        height:"300px",
        
        }}>
            <Typography sx={{}}>-モチベータ-</Typography>
            <Box sx={{
                // height:"90px",
                // borderBottom:"1px solid black",
                // backgroundColor:"#46C2CB",
                // textAlign:"center",
                display:"flex",}}>
                    
                    {/* <Typography sx={{
                        color:"#9C254D",
                        fontWeight:"bold",
                        
                        }}>モチベータ</Typography> */}
                        <Checkbox />
                        <Typography variant="subtitle2"
                        sx={{
                            color:"#9C254D",
                            
                        }}>キッチン掃除する</Typography>
            </Box>


    </Card>
}

export default Sample;