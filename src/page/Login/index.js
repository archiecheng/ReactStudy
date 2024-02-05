import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
const Login = () => {
    const navigate = useNavigate()
    return (
        <div>
            我是登录
            {/* 声明式导航 */}
            <Link to={"/article"}>跳转到文章页</Link>
            {/* 命令式导航 */}
            <button onClick={() => {navigate('/article')}}>跳转到文章</button>
            <button onClick={() => {navigate('/article?id=1001&name=jack')}}>searchParams传参</button>
            <button onClick={() => {navigate('/article/1001/jack')}}>params传参</button>
        </div>
    )
}

export default Login