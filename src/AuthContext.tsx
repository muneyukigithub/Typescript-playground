import React, { createContext } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { redirect, useNavigate } from 'react-router-dom';

const AuthContext = React.createContext<any>(null);

export type AuthUserContextType = {
    Auth: () => boolean;
    login: (username: string, password: string) => void;
    logout: () => void;
    user: string;
}

export const useAuth = () => {
    return useContext(AuthContext);
}

export const AuthProvider: React.FC<any> = ({ children }) => {
    const [user, setuser] = useState("")
    const [isAuth, setIsAuth] = useState(false)
    const navigate = useNavigate();

    const login = (username: any, password: any) => {
        return execlogin(username, password)
    }

    const logout = async () => {
        const returnuser = user;
        await fetch("http://127.0.0.1:8000/api/v1/logout/", {
            method: "GET",
            credentials: "include"
        }).then(() => {
            setIsAuth(false)
            setuser("")
            console.log(returnuser + "--------------")
        })
        return returnuser
    }

    const execlogin = async (username: any, password: any) => {
        const loginuser = { "loginuser": "" }

        await fetch("http://127.0.0.1:8000/api/v1/token/", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify({ "email": username, "password": password })
            // body: JSON.stringify({ email: "admin@admin.com", password: "password" })

        }).then(() => {

            const res = fetch("http://127.0.0.1:8000/api/v1/user/", {
                method: "GET",
                credentials: 'include',
            })
            return Promise.resolve(res);
        }).then((res) => {
            return Promise.resolve(res.json())
        }).then(json => {
            loginuser["loginuser"] = json.username;
            setuser(json.username)
            setIsAuth(true)
        })

        return loginuser





    }

    const Auth = () => {
        return isAuth
    }

    const value: AuthUserContextType = {
        "login": login,
        "logout": logout,
        "Auth": Auth,
        "user": user,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
};