import { Link } from "react-router-dom"

const ShopList = () => {
    return (
        <>
            <div>
                <ul>
                    <li>
                        {/* 动态传参 需要修改route 路径 */}
                        <Link to='/home/ditle/1'>查看详情1</Link>
                    </li>
                    <li>
                        <Link to='/home/ditle/?name=zs&age=19'>查看详情2</Link>
                    </li>
                    <li>
                        <Link to={{ pathname: '/home/ditle', search: `name=zs&age=${19}` }} >查看详情3</Link>
                    </li>
                    <li>
                        <Link to='/home/ditle' state={{name:'zs',age:12}}>查看详情4</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default ShopList