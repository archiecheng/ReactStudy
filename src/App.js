// 项目的根组件
// App -> index.js -> public/index.html(root)
function getName() {
  return 'Archie'
}
const count = 100
function App() {
  return (
    <div className="App">
      this is App
      {/* 1. 使用引号传递字符串 */}
      {'this a message'}
      {/* 2. 识别js变量 */}
      {count}
      {/* 3. 函数调用 */}
      {getName()}
      {/* 4. 方法调用 */}
      {new Date().getDate()}
      {/* 5. 使用JavaScript对象 */}
      <div style={{color:'red'}}>this is a div tag</div>
    </div>
  );
}

export default App;
