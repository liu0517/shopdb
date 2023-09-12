import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
// 一级路由
import App from '../view/App/App'
import Login from '../page/Login'
import Reg from '../page/Reg'

import Page404 from '../page/Page404' //404

// 路由独享守卫
import AuthUser from '../access/AuthUser'
// 全局路由守卫 注意这个要在 BrowserRouter 下一层级
import GlobalUser from '../access/GlobalUser'

// 二级路由
// import Home from '../page/Home'
import Cate from '../page/Cate'
import Goods from '../page/Goods'
import My from '../page/My'

// 三级路由
import ShopList from '../page/ShopList'
import BannerList from '../page/BannerList'

// 详情页面
import Ditle from '../page/Ditle'

const ConfigRoute = () => {
    return (
        <BrowserRouter>
            <GlobalUser>
                <Routes>
                    {/* 一级列表 */}
                    <Route path='/' element={<App />}>
                        {/* 二级列表 */}
                        <Route path='' element={<Navigate to='home'></Navigate>}></Route>
                        <Route path='home'>
                            {/* 三级列表 */}
                            <Route path='' element={<Navigate to={'shoplist'}></Navigate>}></Route>
                            {/* 注意! 此处添加了路由独享守卫 */}
                            <Route path='shoplist' element={<AuthUser><ShopList /></AuthUser>}></Route>
                            <Route path='bannerList' element={<BannerList />}></Route>
                            {/* 动态路由传参 需要在路径后面添加形参 */}
                            {/* <Route path='ditle/:id' element={<Ditle />}></Route> */}
                            <Route path='ditle' element={<Ditle />}></Route>
                        </Route>
                        <Route path='cate' element={<Cate />}></Route>
                        <Route path='goods' element={<Goods />}></Route>
                        <Route path='my' element={<My />}></Route>
                    </Route>
                    <Route path='login' element={<Login />}></Route>
                    <Route path='reg' element={<Reg />}></Route>
                    <Route path='*' element={<Page404 />}></Route>
                </Routes>
            </GlobalUser>
        </BrowserRouter>
    )
}


export default ConfigRoute


