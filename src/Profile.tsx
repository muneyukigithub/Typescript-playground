import { Button } from '@mui/material';
import { useAuth } from 'AuthContext';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import UserDeactivateComplete from 'UserDeactivateComplete';

const Profile = (props: any) => {

    const navigate = useNavigate()
    const Auth = useAuth();
    const url = "http://127.0.0.1:8000/UserDeactivate/"
    const UserDeactivate = async () => {
        await fetch(url, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ "email": Auth.user })
        }).then((res) => {
            if (res.status === 200) {
                console.log(res.status);
                return Auth.logout()
                // Promise.resolve(r)

            } else {
                return

            }
        }).then((res) => {
            console.log(res);
            if (res) {
                navigate("/UserDeactivateComplete", { state: { user: res } })
            }

            // navigate("/UserDeactivateComplete")

        })
    }
    return (
        <div>
            プロフィール
            {Auth.user}
            <Button onClick={UserDeactivate}>退会</Button>
            <Link to="/main">メイン画面に戻る</Link>
        </div>
    )
}

export default Profile