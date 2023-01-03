import { Link, useNavigate } from 'react-router-dom'
import React from 'react'
import { Button, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import { useAuth } from 'AuthContext'
import RegistComplete from "RegistComplete"

const Register: React.FC = () => {
  const [user, setuser] = useState("");
  const [password, setpassword] = useState("");
  const url = "http://127.0.0.1:8000/api/v1/userRegist/"
  const Auth = useAuth();
  const navigate = useNavigate();

  const userchange = (e: any) => {
    // user = e.target.value;
    setuser(e.target.value);
    // console.log(user);
    console.log(user);
  }

  const userpassword = (e: any) => {
    // user = e.target.value;
    setpassword(e.target.value);
    // console.log(user);
    console.log(password);
  }

  const regist = async () => {
    await fetch(url, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({ "email": user, "password": password })
      // body: JSON.stringify({ email: "admin@admin.com", password: "password" })
    }).then((res) => {

      if (res.status == 200) {
        if (Auth.login(user, password)) {
          navigate("/registcomplete")
        }
      }

      console.log(res.status)
      // navigate("/main")
      // if(res=="  1成功"){
      // }else{
      // }
    })
  }

  return (
    <>
      <h1>新規登録ページ</h1>
      <Typography>ユーザー</Typography>
      <TextField onChange={userchange} />
      <Typography>パスワード</Typography>
      <TextField onChange={userpassword} />
      <Button onClick={regist}>ユーザー作成</Button>
      <div>
        ログインは<Link to={`/login/`}>こちら</Link>

      </div>
      <div>
        <Link to={`/`}>ホームに戻る</Link>
      </div>
    </>
  )
}

export default Register
