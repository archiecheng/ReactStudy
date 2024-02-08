import { Component } from "react";

// Class API
class Counter extends Component {
  // 编写组件的逻辑代码
  // 1. 状态变量 2. 事件回调 3. UI (JSX)
  // 1. 定义状态变量
  state = {
    count: 0
  }
  // 2. 定义事件回调修改状态数据
  setCount = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return <button onClick={this.setCount}>{this.state.count}</button>
  }
}
function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;
