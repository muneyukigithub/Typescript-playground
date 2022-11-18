import React from 'react'
import { Typography, Box } from '@mui/material'

// rafce
type Content = {
  id: number
  value: string
  edit: boolean
}

const Typo = (props: Content) => {
  return (
    <Box>
      <Typography>仕事内容</Typography>
      <Typography>{props.value}</Typography>
    </Box>
  )
}

export default Typo
