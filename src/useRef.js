import { useEffect, useRef, useState } from 'react'

function UseRef() {

    const [count, setCount] = useState(60);
    const [start, setStart] = useState(false);

    const prevCount = useRef();

    let timer = useRef();

    useEffect(() => {
        prevCount.current = count;
    }, [count]);

    console.log(count, prevCount.current);

    const handleStart = () => {
        setStart(true);
        if(!start) {
            timer.current = setInterval(() => {
                setCount(prev => prev-1)
            }, 1000)
    
            console.log('Start ->', timer.current);
        }
        return () => {
            clearInterval(timer.current);
        }
    }

    const handleStop = () =>{
        setStart(false);
        if(start) {
            clearInterval(timer.current);
            console.log('Stop ->', timer.current);
        }
    }

  return (
    <div style={{padding: 20}}>
        <span style={{color: 'red'}}>------Begin UseRef-------</span>
        <h1 style={{margin: 0}}>{count}</h1>
        <button onClick={handleStart}>Start</button>
        <button  onClick={handleStop}>Stop</button>
        <br />
        <span style={{color: 'red'}}>------End UseRef-------</span>
    </div>
  )
}

export default UseRef