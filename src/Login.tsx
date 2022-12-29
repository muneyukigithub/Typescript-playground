import { Link, Navigate, useNavigate } from 'react-router-dom'
import React from 'react'
import { TextField, Typography } from '@mui/material'
import { useState } from 'react'
import { useAuth } from 'AuthContext'

const Login: React.FC = () => {
  // const user = "";
  const [user, setuser] = useState("");
  const [password, setpassword] = useState("");
  const Auth = useAuth();
  const navigate = useNavigate();
  // console.log(Auth.login("admin", "pass"));

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

  const tes = (username: any, password: any) => {
    console.log(username);
    console.log(password);
  }

  const login = async () => {
    await Auth.login(user, password)
    navigate("/main")
  }

  return (
    <>
      <h1>ログインページ</h1>
      <Typography>ユーザー</Typography>
      <TextField onChange={userchange} />
      <Typography>パスワード</Typography>
      <TextField onChange={userpassword} />
      <div>
        新規登録は<Link to={`/regist`}>こちら</Link>
      </div>
      <div>
        <Link to={`/`}>ホームに戻る</Link>
      </div>
      <button onClick={login}>ログイン</button>
    </>
  )
}

export default Login
