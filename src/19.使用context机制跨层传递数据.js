// App -> A -> B
// 1. createContext方法创建一个上下文对象
// 2. 在顶层组件 通过Provider组件提供数据
// 3. 在底层组件 通过useContext钩子函数使用数据
import { useContext } from "react";
import { createContext } from "react";
const MsgContext = createContext()
function A() {
  return (
    <div>
      this is A component
      <B />
    </div>
  )
}
function B() {
  const msg = useContext(MsgContext)
  return (
    <div>
      this is B component, {msg}
    </div>
  )
}
function App() {
  const msg = 'this is app msg'
  return (
    <div className="App">
      <MsgContext.Provider value={msg}>
        this is App
        <A />
      </MsgContext.Provider>
    </div>
  );
}

export default App;
