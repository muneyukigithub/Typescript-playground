import { useAuth } from 'AuthContext';
import React from 'react'
import { Link } from 'react-router-dom'

const RegistComplete = (props: any) => {

    const Auth = useAuth();

    return (
        <div>
            ユーザー登録が完了しました。
            {Auth.user}

            <Link to="/main">メイン画面</Link>

        </div>
    )
}

export default RegistComplete
