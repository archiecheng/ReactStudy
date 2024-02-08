import { Component } from "react";
// 1. 父传子 直接通过prop子组件标签身上绑定父组件中的数据即可
// 2. 子传父 在子组件标签身上绑定一个父组件中的函数，子组件中调用这个函数传递参数

// Class API
class Son extends Component {
  render() {
    // 使用 this.props.msg
    return <>
      <div>I am a son{this.props.msg}</div>
      <button onClick={() => {this.props.onGetSonMsg('我是子组件')}}>sendMsgToParent</button>
    </>
  }
}

// 父组件
class Parent extends Component{
  state = {
    msg:'this is parent msg'
  }

  getSonMsg = (sonMsg) => {
    console.log(sonMsg);
  }
  render() {
    return <div>我是父组件<Son msg={this.state.msg} onGetSonMsg={this.getSonMsg} /></div>
  }
}
function App() {
  
  return (
    <div className="App">
      <Parent />
    </div>
  );
}

export default App;
