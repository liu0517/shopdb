import { useLocation, Navigate } from "react-router-dom"

// 这玩意不需要注释
const GlobalUser = ({ children }) => {
    const loca = useLocation()
    if (loca.pathname.includes('/login') || loca.pathname.includes('/reg')) {
        return children
    } else {
        if (true) {
            return children
        } else {
            return <Navigate></Navigate>
        }
    }
}


export default GlobalUser