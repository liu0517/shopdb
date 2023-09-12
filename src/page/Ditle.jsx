import { Link, useLocation, useParams, useSearchParams, useNavigate } from "react-router-dom"


const Ditle = () => {
    // const params = useParams()// 动态路由传参 接收方式
    // console.log(params.id)

    // 查询字符串传参方式 返回值是一个数组
    // const [searchP,setSearch] = useSearchParams()
    // console.log(searchP.getAll('age'))

    // state 传参方式 返回值是一个对象
    // const stateP = useLocation()
    // console.log(stateP)
    // console.log(stateP.state.age)
    const goPath = useNavigate()
    const goback = () => {
        goPath('../')
        // 编程式导航传参方式也是一样的
        // 动态路由传参  goPath('/home/1/2) 同样要修改route 文件的路径 加形参 :id/:age
        // 查询字符串传参 可以用模版字符串拼接  gopath(`/home/?id=${1}`)
        //  也可以用state 隐式传参 地址栏不显示 goPath('/home',{state:{id:1,name:'zs'}})
    }

    return (
        <>
            <div>详情</div>
            {/* <button><Link to='../'>返回上一层</Link></button> */}
            <button onClick={goback}>编程式导航</button>
        </>
    )
}

export default Ditle