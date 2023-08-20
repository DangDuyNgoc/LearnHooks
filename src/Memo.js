import { useState } from 'react'

import Content from './MemoSub';

function Memo() {

  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount(count +1);
  }

  return (
    <div style={{padding: 20}}>
      <span style={{color: 'red'}}>------Begin React.Memo-------</span>
      <Content />
      <h1 style={{margin: 0}}>{count}</h1>
      <button onClick={handleCount}>Click Me!</button>
      <br />
      <span style={{color: 'red'}}>------End React.Memo-------</span>
    </div>
  )
}

export default Memo