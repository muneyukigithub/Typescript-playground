import { useAuth } from "AuthContext"
import Login from "Login";
import Main from "Main";
import React from "react";
import { Route, redirect, Navigate, useLocation } from "react-router-dom";

type Props = {
    component: React.ReactNode;
    redirect: string
}

export type AuthUserContextType = {
    Auth: () => boolean;
    login: () => void;
}

export const Islogin = (props: Props) => {
    // const loca = useLocation();
    const Auth: AuthUserContextType = useAuth();
    console.log(Auth.Auth())

    return (
        Auth.Auth() ? <>{props.component}</>
            : <Navigate to={"/" + props.redirect} />

        // <Route path={path} element={element} />
        // return Auth ? <Component {...props} /> : redirect("/login")

        // <Route path="/" element={<Main />} />

        // {...rest}
        // render={(props: any) => {
        //     return Auth ? <Component {...props} /> : redirect("/login");
        // }}


    )
}