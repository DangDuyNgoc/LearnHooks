import { useLayoutEffect, useState} from 'react'

function LayoutEffect() {

    const [count, setCount] = useState(0);

    useLayoutEffect (() => {
        count > 3 && setCount(0)
    }, [count])

    const handleCount = () => {
        setCount(count + 1);
    }

  return (
    <div style={{padding: 20}}>
      <span style={{color: 'red'}}>------Begin UseLayoutEffect-------</span>
      <h1 style={{margin: 0}}>{count}</h1>
      <button onClick={handleCount}>Count</button>
      <br />
      <span style={{color: 'red'}}>------End UseLayoutEffect-------</span>
    </div>
  )
}

export default LayoutEffect;