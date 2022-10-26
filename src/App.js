import React from 'react';

function App() {

  
  // Counter
  const [count, setCount] = React.useState(0)

  const onClickPlus = () => {
    setCount(count + 1)
  }

  const onClickMinus = () => {
    setCount(count - 1)
  }

  const onClickMult = () => {
    setCount(count*2)
  }

  const onClickReduce = () => {
    setCount(count/2)
  }

  // Open Modal
  const [open, setOpen] = React.useState(false);


  return (
   <div className="App">
    <div className="open">
      <button onClick={()=> setOpen(true)} className="openmodal">Open Counter</button>
    </div>

   {open && (
    <div className="counter"> 
      <button onClick={()=> setOpen(false)} className="close">Close</button>
      <h2>Counter</h2>
      <h1>{count}</h1>
      <button onClick={onClickMinus} className="minus">Minus</button>
      <button onClick={onClickPlus} className="plus">Plus</button>
      <br/>
      <button onClick={onClickMult} className="mult">X2</button>
      <button onClick={onClickReduce} className="reduce">/2</button>
    </div>
   )}
    </div>
  );
}

export default App;
