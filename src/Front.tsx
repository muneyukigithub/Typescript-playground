import React from 'react'
import { Link, Navigate } from 'react-router-dom'

export const Front: React.FC = () => {
    return (
        <div>
            {/* <Navigate to={"/main"} /> */}
            <Link to="/login">login</Link>
        </div>
    )
}

// export default Front
