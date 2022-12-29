import { useAuth } from 'AuthContext';
import { userInfo } from 'os';
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const UserDeactivateComplete = () => {
    const location = useLocation();
    const data = location.state
    console.log(data)

    return (
        <div>
            ユーザー退会が完了しました。
            {data.user}

            <Link to="/">ホーム画面に戻る</Link>

        </div>
    )
}

export default UserDeactivateComplete
