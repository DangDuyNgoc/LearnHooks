import { useCallback, useState } from 'react'
import Component from './useCallbackSub';


function UseCallback() {

    const [todos, setTodos] = useState([]);
    const [count, setCount] = useState(0);

    const addTodo = useCallback(() => {
        setTodos(prevs => [...prevs, 'New Todo']);
    }, [todos])

    const handleIncrease = () => {
        setCount(count +1);
    }

    return (
        <div style={{padding: 20}}>
            <span style={{color: 'red'}}>------Begin useCallback-------</span>
            <Component todos={todos} addTodo={addTodo}/>
            <div>
                <h1>{count}</h1>
                <button onClick={handleIncrease}>+</button>
            </div>    
            <span style={{color: 'red'}}>------End useCallback-------</span>
        </div>
    )
}

export default UseCallback