import { useRef, useState } from "react";
import { actions, useStore } from ".";

function ContextReducer() {

    const [state, dispatch] = useStore();
    const {todos, todoInput} = state;
    const [name, setName] = useState('Add');
    const [newIndex, setNewIndex] = useState('');

    const inputRef = useRef();

    const handleSubmit = () => {
        dispatch(actions.addTodo(todoInput));
        dispatch(actions.setTodoInput(''));
        inputRef.current.focus();
    }

    const handleEdit = (index) => {
        setName('Update');
        setNewIndex(index);
        dispatch(actions.setTodoInput(todos[index]));
        inputRef.current.focus();
    }

    const handleSave = (newIndex) => {
        setName('Add')
        dispatch(actions.eidtTodo(newIndex))
        dispatch(actions.setTodoInput(''))
    }

    return ( 
        <div style={{padding: 20}}>
            <span style={{color: 'red'}}>------Begin Context and UseReducer-------</span>
            <br />
            <input 
                ref={inputRef}
                value={todoInput}
                placeholder="Enter Job"
                onChange={e => {
                    dispatch(actions.setTodoInput(e.target.value))
                }}
                onKeyDown={e => e.keyCode === 13 && handleSubmit(newIndex)}
            />
            <button
                onClick={name === 'Add' ? handleSubmit : () => handleSave(newIndex)}
            >
                {name}
            </button>
            <br />
            {todos.map((todo, index) => {
                return (
                    <li key={index}>{todo}
                        <button onClick={() => handleEdit(index)}>Edit</button>
                        <button
                            onClick={() => dispatch(actions.deleteTodo(index))}
                        >&times;
                        </button>
                    </li>
                    
                )
            })}
            <span style={{color: 'red'}}>------End Context and UseReducer-------</span>
        </div>
    );
}
    
export default ContextReducer;