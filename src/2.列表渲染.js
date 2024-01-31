const list = [
  {id: 1001, name:'Vue'},
  {id: 1002, name:'React'},
  {id: 1003, name:'Angular'},
]
function App() {
  return (
    <div className="App">
      this is App
      {/* 渲染列表 */}
      {/* map 循环哪个结构 return结构 */}
      {/* 注意事项: 加上一个独一无二的key值, 字符串或者number，通常用id绑定 */}
      {/* key的作用: React框架内部使用的东西，提升更新性能 */}
      <ul>
        {list.map(item => <li key={item.id}>{item.name}</li>)}
      </ul>
    </div>
  );
}

export default App;
