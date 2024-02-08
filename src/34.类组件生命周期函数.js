import { Component, useState } from "react";

// Class API
class Son extends Component {
  // 声明周期函数
  // 组件渲染完毕执行一次 发送网络请求
  componentDidMount() {
    console.log('组件渲染完毕，请求发送起来');
    // 开启定时器
    this.timer = setInterval(()=> {
      console.log('定时器进行中');
    }, 1000)
  }

  // 组件卸载的时候自动执行 副作用清理的工作 清除定时器 清除时间绑定
  componentWillUnmount() {
    console.log('组件被卸载了');
    // 清除定时器
    clearInterval(this.timer)
  }
  render() {
    return <div>I am a son</div>
  }
}
function App() {
  const [show, setShow] = useState(true)
  return (
    <div className="App">
      {show && <Son />}
      <button onClick={() => setShow(false)}>unmount</button>
    </div>
  );
}

export default App;
