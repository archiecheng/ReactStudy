function Son(props) {
  console.log(props);
  return <div>this is son, {props.children}</div>
}
function App() {
  return (
    <div className="App">
      <Son>
        <span>this is a span</span>
      </Son>
    </div>
  );
}

export default App;
