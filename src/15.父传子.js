// 父传子
// 1. 父组件传递数据 子组件的标签身上绑定属性
// 2. 子组件接收数据 props的参数去接收

function Son(props) { 
  // props: 对象, 里面包含了父组件传递而来的所有数据
  console.log(props);
  // props.name = 'new name' // 子组件不允许修改父组件中的值
  return <div>this is a son, {props.name}, jsx:{props.child}</div>
}

function App() {
  const name = 'this is app name'
  return (
    <div className="App">
      <Son 
        name={name}
        age = {18}
        isTrue = {false}
        list = {['vue', 'react']}
        obj={{name:'jack'}}
        cb={()=> console.log(123)}
        child={<span>this is a span</span>}
       />
    </div>
  );
}

export default App;
