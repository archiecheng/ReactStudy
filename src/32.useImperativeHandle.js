// 

import { forwardRef } from "react";
import { useRef } from "react";

// function Son () { 
//   return <input type="text" />
//  }

 const Son = forwardRef((props, ref) => {
  return <input type="text" ref={ref} />
 })
function App() {
  const sonRef = useRef(null)
  const showRef = () => {
    console.log(sonRef);
  }
  return (
    <div className="App">
      <Son ref={sonRef} />
      <button onClick={showRef}>focus</button>
    </div>
  );
}

export default App;
