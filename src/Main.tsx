import { Link, NavLink } from 'react-router-dom'
import { FC, ReactNode, useState } from 'react'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search'
import CssBaseline from '@mui/material/CssBaseline'
import {
  InputBase,
  Menu,
  MenuItem,
  Paper,
  Button,
  Grid,
  Divider,
  List,
  AppBar,
  Box,
  Card,
  Fab,
  Toolbar,
  Typography,
  Container,
  Drawer,
  IconButton,
  fabClasses,
} from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import { mainListItems, secondaryListItems } from './listi'
import AccountCircle from '@mui/icons-material/AccountCircle'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';

import { red } from '@mui/material/colors';

import Typo from 'Typo'
import Edit from 'Edit'

import Maintask from 'Maintask'
import Smalltask from 'Smalltask'
import Motivate from 'Motivate'
import Sample from 'Sample'
import { Testjson } from 'Testjson'

//関数コンポーネントがchildrenを受け取る場合の型定義
// type Props = {
//     text: string
//     children: React.ReactNode
//   }

//   const SampleComponent5: React.VFC<Props> = (props) => {
//     return (
//       <div>
//         <h1>Hello {props.text}!</h1>
//         <p>{props.children}</p>
//       </div>

// ③ props に直接型注釈を指定するパターン
// const SampleComponent3 = (props: Props) => {
//     return <div>Hello {props.text}!</div>
//   }

// ④ React.VFC<P>のジェネリック型<P>として型を指定するパターン
//   const SampleComponent4: React.VFC<Props> = (props) => {
//     return <div>Hello {props.text}!</div>
//   }

const count = 1
const menuId = 'primary-search-account-menu'

const theme = createTheme({
  palette: {
    mode: 'light',
  },
})

interface testtype {
  name:string;
}



const Main: React.FC = () => {
  // Generate Order Data


  const jsonsetedit = () => {
    const test2: object[] = Testjson;
    for(let i =0;i<Testjson.length;i++){
      Testjson[i]= {edit:true,...Testjson[i]};
    }

    console.log(Testjson);
  }

  const getmaintaskdata = (getjson:object) =>{
    
    return 
  }

  
  // test2[0] = {edit:true,...test2[0]};
  // Testjson[0].edit
  // console.log(test2);

  const [tasks, settasks] = useState([{ id: 1, value: 'content field', edit: true }])
  const [anchorEl, setAnchorEL] = useState(null)
  const isMenuOpen = Boolean(anchorEl)
  const [currentRow, setCurrentRow] = React.useState(null)

  // 編集フラグ
  const [edit,setedit] = React.useState<boolean>(true);

  const [editid, seteditid] = React.useState(null)

  const list: any[] = []

  function createData(id: number, date: string, name: string, shipTo: string, paymentMethod: string, amount: number) {
    return { id, date, name, shipTo, paymentMethod, amount }
  }

  const createtaskobject = () => {
    return { id: tasks.length + 1, value: '', edit: true }
  }

  const addtask = () => {
    settasks([...tasks, createtaskobject()])
  }

  const handlesetanchor = (event: any) => {
    setAnchorEL(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEL(null)
    setCurrentRow(null)
  }

  const handledelete = (e: any, task: any) => {
    e.preventDefault()

    const newlist = tasks.filter((i) => {
      console.log(i.id != task.id)
      return i.id != task.id
    })

    settasks(newlist)
  }

  const handleOpenMenu = (event: any, row: any) => {
    setAnchorEL(event.currentTarget)
    setCurrentRow(row)
  }

  const handleEdit = (task: any) => {
    const newtask = { ...task, edit: true }
    const newtasks = tasks.map((_task) => {
      return _task.id === newtask.id ? { ...newtask } : { ..._task }
    })

    settasks(newtasks)
  }

  const handleCreate = (task: any) => {
    const newtask = { ...task, edit: false }

    console.log(tasks)

    const newtasks = tasks.map((_task, index) => {
      return _task.id === newtask.id ? { ...newtask } : { ..._task }
    })
    settasks(newtasks)
  }

  Testjson.forEach((task, index) => {
    list.push(
      <Paper
        elevation={3}
        sx={{
          // mb: 3,
          px: 3,
          pb:3,
          display: 'flex',
          flexDirection: 'column',
          minHeight:"240px",

        }}
      >
        <Box
          sx={{
            height: '30px',
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >

          {
            edit?
            <Button onClick={()=>{setedit(!edit)}}>
           <EditIcon color="success"/>編集する
          </Button>
          :<Button onClick={()=>{setedit(!edit)}}>
          <CheckIcon color="success"/>編集を確定する
         </Button>
  }
<Button onClick={()=>{setedit(!edit)}}>
<DeleteIcon sx={{color:red[500],ml:2}}/>削除する
         </Button>

          
          {/* <IconButton
            edge="end"
            aria-label="account of current user"
            aria-controls={menuId}
            aria-haspopup="true"
            onClick={(event) => handleOpenMenu(event, task)}
            color="inherit"
            sx={{
              // width:"20px",
              justifyContent: 'flex-end',
            }}
          >
            <MoreHorizIcon />
          </IconButton> */}
          {/* <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={currentRow === task}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={(e) => handledelete(e, task)}>削除</MenuItem>
            <MenuItem onClick={(e) => handleEdit(task)}>編集</MenuItem>
            <MenuItem onClick={(e) => handleCreate(task)}>作成</MenuItem>
          </Menu> */}
        </Box>
        
        <Grid container justifyContent="center" direction="column" spacing={2}>


        {/* やることフェーズコンポーネント */}

        <Grid item>
        <Maintask editflag={edit} seteditflag={setedit} taskdata={task}/>
        </Grid>

        {/* モチベータフェーズコンポーネント */}
        <Grid item>
        <Motivate editflag={edit} seteditflag={setedit} taskdata={task}/>
        </Grid>
        
        {/* 細分化フェーズコンポーネント */}
        <Grid item>
        <Smalltask editflag={edit} seteditflag={setedit} />
        </Grid>

        </Grid>
        


        

        {/* <Box>{task.edit ? <Edit {...task} /> : <Typo {...task} />}</Box> */}

        {/* {task.edit ? (
          <Button
            onClick={(e) => handleCreate(task)}
            variant="contained"
            sx={{ mb: '20px', ml: 'auto', mt: 'auto', width: '120px', fontSize: '3px' }}
          >
            タスクカード作成
          </Button>
        ) : (
          ''
        )} */}
      </Paper>
    )
  })

  const TaskBottom = (
    <Box>
      <Button variant="contained"></Button>
    </Box>
  )

  return (
    <>
      <CssBaseline />
      <AppBar position="relative" sx={{ backgroundColor: '#fff', p: 0, boxShadow: '0' }}>
        <Toolbar sx={{ ml: '16px' }}>
          <Box
            sx={{
              backgroundColor: '#EEEEEE',
              borderRadius: '46px',
              width: '70%',
              display: 'inline-flex',
            }}
          >
            <Box
              sx={{
                py: '5px',
                pl: '25px',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <SearchIcon color="primary" />
            </Box>
            <InputBase placeholder="Search…" />
          </Box>
          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ display: 'flex' }}>
            <Button variant="contained" sx={{ width: '100px', ml: '20px' }}>
              使い方
            </Button>
            <Button variant="contained" sx={{ width: '100px', ml: '20px' }}>
              ログイン
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Grid container spacing={0}>
        <Grid item xs={12} md={9}>
          <Box
            sx={{
              backgroundColor: 'white',
              height: '100vh',
              mx: 5,
              mt: 1,
            }}
          >
            <Typography
              sx={{
                mb: '30px',
                fontSize: '30px',
                fontFamily: 'Roboto, system-ui,Hiragino Kaku Gothic ProN,sans-serif;',
              }}
            >
              タスクカード
            </Typography>
            {list}

            {/* <Sample /> */}

            <Fab color="primary" variant="extended" sx={{ mt: 3 }} onClick={addtask}>
              <AddIcon />
              Task
            </Fab>
          </Box>
        </Grid>

        <Grid item xs={0} md={3}>
          <Box sx={{ backgroundColor: '#EEEEEE', height: '100vh', minWidth: '' }}></Box>
        </Grid>
      </Grid>
    </>
  )
}

export default Main
