import { Button, Paper, Typography } from '@mui/material'
import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const MinPaper = (props: any) => {
    return (
        <div>
            <Paper
                elevation={3}
                sx={{
                    p: 3,
                    minHeight: "70px",
                    display: "flex"
                }}>
                <Button id={props.taskid} onClick={props.changeEvent}>
                    {'>'}
                </Button>
                <Typography variant="h4">
                    {props.taskname}
                </Typography>

            </Paper>
        </div>
    )
}

export default MinPaper
