const isLogin = true
function App() {
  return (
    <div className="App">
      {/* 逻辑与 && */}
      {isLogin && <span>this is span tag</span>}
      {/* 三元运算符 */}
      {isLogin ? <span>Archie</span> : <span>loading...</span>}
    </div>
  );
}

export default App;
