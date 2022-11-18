import React from 'react'
import { Box, TextField, Typography } from '@mui/material'

type Content = {
  id: number
  value: string
  edit: boolean
}

const Edit = (props: Content) => {
  return (
    <Box sx={{ display: 'flex', flexFlow: 'column' }}>
      {/* <Typography>仕事内容</Typography> */}
      <TextField variant="standard" label="Task" sx={{ width: '200px' }} />
      {/* <Typography sx={{}}>細分化タスク</Typography> */}
      <TextField variant="standard" label="small Task" sx={{ width: '200px' }} />
    </Box>
  )
}

export default Edit
