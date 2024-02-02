import { useState } from "react";
import { useEffect } from "react";
const URL = 'http://geek.itheima.net/v1_0/channels'
function App() {
  // 创建一个状态数据
  const[list, setList] = useState([])
  useEffect(() => {
    // 额外的操作 获取频道列表
    async function getList() {
     const res = await fetch(URL)
     const jsonRes = await res.json()
     console.log(jsonRes);
     setList(jsonRes.data.channels)
    }
    getList()
  }, [])
  return (
    // 1. 接口是否发送成功
    // 2. 是否只执行了一次
    <div className="App">
      this is App
      <ul>
        {list.map(item => <li key={item.id}>{item.name}</li>)}
      </ul>
    </div>
  );
}

export default App;
