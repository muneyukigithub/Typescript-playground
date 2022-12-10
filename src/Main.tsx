import { Link, NavLink } from 'react-router-dom'
import { FC, ReactNode, useRef, useState } from 'react'
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
import { v4 as uuid4 } from 'uuid';

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

interface item {
  smalltask_id: string
	smalltask: string
	task_id:string
}

interface taskArray {
  task_id:string
  edit:boolean
  task:string
  created_at:string
  smalltask:item[]
}

const count = 1
const menuId = 'primary-search-account-menu'

const theme = createTheme({
  palette: {
    mode: 'light',
  },
})



const Main: React.FC = () => {
  // Generate Order Data
  console.log("Main.tsx");




  const jsonsetedit = () => {
    const taskjson:taskArray[] = Array(Testjson.length);
    for(let i =0;i<Testjson.length;i++){
      taskjson[i]= {edit:true,...Testjson[i]};
    }

    return taskjson;
  }

  const taskjson:taskArray[] = jsonsetedit();

  const getmaintaskdata = (getjson:object) =>{
    
    return 
  }

  
  // test2[0] = {edit:true,...test2[0]};
  // Testjson[0].edit
  // console.log(test2);

  // const [tasks, settasks] = useState([{ id: 1, value: 'content field', edit: true }])
  const [tasks, settasks] = useState(taskjson);
  const [anchorEl, setAnchorEL] = useState(null)
  const isMenuOpen = Boolean(anchorEl)
  const [currentRow, setCurrentRow] = React.useState(null)

  const [maintaskform,setmaintaskform] = useState([{task_id:"iu0f4ab2-ee0a-474f-919a-540fb3de16df",form:""},{task_id:"be0f4ab2-ee0a-474f-919a-540fb3de16df",form:""}]);
  // const [maintaskform,setmaintaskform] = useState({});
  const [motivatetaskform,setmotivateform] = useState();

  // 編集フラグ
  // const [edit,setedit] = React.useState<boolean>(true);

  const [editid, seteditid] = React.useState(null)

  const list: any[] = []

  // function createData(id: number, date: string, name: string, shipTo: string, paymentMethod: string, amount: number) {
  //   return { id, date, name, shipTo, paymentMethod, amount }
  // }

  const createtaskobject = () => {
    // return { id: tasks.length + 1, value: '', edit: true }
    return { task_id:uuid4(),edit:true,task:"",created_at:"",smalltask:[]};
  }

  const addtask = () => {

    // console.log(tasks);
    const newtasks = tasks;

    console.log(tasks.length);

    newtasks[tasks.length] = createtaskobject();

    console.log(tasks.length);
    newtasks[tasks.length].smalltask[0]= {
      "smalltask_id": "be451694-3bc5-4139-8a8b-51778b7e51d1",
      "smalltask": "newsmall",
      "task_id": "be0f4ab2-ee0a-474f-919a-540fb3de16df"
    }

    // console.log(newtasks);
    // settasks();

    // settasks([...taskjson, createtaskobject()])
    // taskjson = [...taskjson, createtaskobject()]
  }

  const handlesetanchor = (event: any) => {
    setAnchorEL(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEL(null)
    setCurrentRow(null)
  }

  // const handledelete = (e: any, task: any) => {
  //   e.preventDefault()

  //   const newlist = tasks.filter((i) => {
  //     console.log(i.id != task.id)
  //     return i.id != task.id
  //   })

  //   settasks(newlist)
  // }

  const handleOpenMenu = (event: any, row: any) => {
    setAnchorEL(event.currentTarget)
    setCurrentRow(row)
  }

  // const handleEdit = (task: any) => {
  //   const newtask = { ...task, edit: true }
  //   const newtasks = tasks.map((_task) => {
  //     return _task.id === newtask.id ? { ...newtask } : { ..._task }
  //   })

  //   settasks(newtasks)
  // }

  // const handleCreate = (task: any) => {
  //   const newtask = { ...task, edit: false }

  //   console.log(tasks)

  //   const newtasks = tasks.map((_task, index) => {
  //     return _task.id === newtask.id ? { ...newtask } : { ..._task }
  //   })
  //   settasks(newtasks)
  // }

  // const [state, setState] = useState(['foo', 'bar']);

  // setState((prevState) =>
  //   prevState.map((value) => (value === 'bar' ? 'hoge' : value)));

  //   console.log(state);

  const editchange=(e:any)=>{
  console.log(maintaskform)

  
  



    
//     const [state, setState] = useState(['foo', 'bar']);

// const updateState = () => {
//   setState((prevState) =>
//     prevState.map((value) => (value === 'bar' ? 'new' : value))
//   );


    settasks((prevstate)=>
    prevstate.map((value)=>value.task_id === e.target.id? 
    {...value,edit:!value.edit}:value))

    console.log(tasks);
    
    // for(let i=0;i<tasks.length;i++){
    //   console.log(tasks[i].task_id);
    //   console.log(e.target.id);
    //   if(tasks[i].task_id===e.target.id){
    //     console.log("toutatu");
    //     settasks([...tasks,{...tasks[i],edit:!tasks[i].edit}])
    //     break;
    //   }
    // }
  
  }

  tasks.forEach((task, index) => {
    const edit = task.edit;
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
            <Button onClick={editchange} id={task.task_id}>
           <EditIcon color="success"/>編集する
          </Button>
          :<Button onClick={editchange}  id={task.task_id}>
          <CheckIcon color="success"/>編集を確定する
         </Button>}


{/* // <DeleteIcon sx={{color:red[500],ml:2}} /> */}

          
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
        <Maintask editflag={edit} task_id={task.task_id} taskdata={task.task} maintaskform={maintaskform} setmaintaskform={setmaintaskform}/>
        </Grid>

        {/* モチベータフェーズコンポーネント */}
        <Grid item>
        <Motivate editflag={edit} taskdata={task}/>
        </Grid>
        
        {/* 細分化フェーズコンポーネント */}
        <Grid item>
        <Smalltask editflag={edit} taskdata={task.smalltask}/>
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
