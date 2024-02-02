// 受控绑定表单

import { type } from "@testing-library/user-event/dist/type";
import { useState } from "react";

// 1. 声明一个 react 状态 - useState

// 2. 绑定核心流程
  // 2.1 通过value属性值绑定react状态
  // 2.2 绑定onChange事件 通过事件参数e拿到输入框最新的值 反向修改到 react 状态上


function App() {
  const [value, setValue] = useState('')
  return (
    <div className="App">
      <input value={value} onChange={(e) => setValue(e.target.value)} type="text"/>

    </div>
  );
}

export default App;
