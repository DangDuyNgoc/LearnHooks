import { memo } from "react";


const Component = ({ todos, addTodo }) => {

    console.log('re-render');

    return ( 
        <>
            <h2>My todos</h2>
            {
                todos.map((todo, index) => (
                    <p key={index}>{todo}</p>
                ))
            }
            <button onClick={addTodo}>Add Todo</button>
        </>
    );
}
 
export default memo(Component);