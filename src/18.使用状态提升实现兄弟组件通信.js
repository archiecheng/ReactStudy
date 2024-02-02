
// 1. 通过子传父 A -> App

import { useState } from "react"

// 2. 通过父传子 App -> B
function A({onGetAName}) {
  // Son组件中的数据
  const name = 'this is A name'
  return (
    <div>
      this is A component
      <button onClick={() => onGetAName(name)}>send</button>
    </div>
  )
}

function B({name}) {
  return (
    <div>
      this is B component, 
      {name}
    </div>
  )
}

function App() {
  const [name, setName] = useState('')
  const getAName = (name) => {
    console.log(name);
    setName(name)
  }
  return (
    <div className="App">
      this is App
      <A onGetAName = {getAName}/>
      <B name={name}/>
    </div>
  );
}

export default App;
