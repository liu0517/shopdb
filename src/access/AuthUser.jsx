import { Navigate } from "react-router-dom"


const AuthUser = ({ children }) => {
    if (true) {
        return children
    } else {
        return <Navigate to='/login'></Navigate>
    }
}


export default AuthUser