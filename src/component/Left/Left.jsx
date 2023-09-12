import './Left.css'
import { NavLink } from 'react-router-dom'
const Left = () => {
    return (
        <>
            <div className='box'>
                <ul>
                    <li>
                        <NavLink to='/home'>Home页</NavLink>
                        <ul>
                            <li>
                                <NavLink to='/home/shopList'>商品列表</NavLink>
                                <NavLink to='/home/bannerList'>品牌列表</NavLink>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <NavLink to='/cate'>Cate页</NavLink>
                    </li>
                    <li>
                        <NavLink to='/goods'>Goods页</NavLink>
                    </li>
                    <li>
                        <NavLink to='/my'>My页</NavLink>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Left