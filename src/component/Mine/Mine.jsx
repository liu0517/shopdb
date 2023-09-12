import MineStyle from './Mine.module.scss'
// 路由的出口
import { Outlet } from 'react-router-dom'

const Mine = () => {
    return (
        <>
            <div className={MineStyle.box}>
                <Outlet></Outlet>
            </div>
        </>
    )
}

export default Mine