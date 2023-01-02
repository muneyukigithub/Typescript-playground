import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './Main'
import Register from './Register'
import Login from 'Login'
import NotFound from 'NotFound'
import Sidebar from './Sidebar'
import { Islogin } from 'Islogin'
import { Front } from 'Front'
import { AuthProvider } from 'AuthContext'
import SignIn from 'Signin'
import RegistComplete from 'RegistComplete'
import Profile from 'Profile'
import UserDeactivateComplete from 'UserDeactivateComplete'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>

          {/* フロント画面 */}
          <Route path="/" element={<Front />} />

          {/* ログイン画面 */}
          <Route path="/login" element={<SignIn />} />

          {/* ユーザー登録画面 */}
          <Route path="/regist" element={<Register />} />

          {/* ユーザー登録完了画面 */}
          <Route path="/registcomplete" element={<RegistComplete />} />

          {/* プロフィール画面 */}
          <Route path="/profile" element={<Profile />} />

          {/* ユーザー退会完了画面 */}
          <Route path="/UserDeactivateComplete" element={<UserDeactivateComplete />} />

          {/* メイン画面 */}
          <Route path="/main" element={<Islogin component={<Main />} redirect="login" />} />

          {/* not found画面 */}
          <Route path="*" element={<NotFound />} />

        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
