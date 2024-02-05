import { useParams, useSearchParams } from "react-router-dom"

const Article = () => {
    // const [params] = useSearchParams()
    // const id = params.get('id')
    // const name = params.get('name')
    const params = useParams()
    let id = params.id
    let name = params.name
    return <div>我是文章{id}-{name}</div>
}

export default Article