import React, { useState } from 'react'

function ToDoList() {
    
    const [job, setJob] = useState('');

    // Toán tử ?? trả về biểu thức bên trái nếu nó khác null(undefined)
    // trả về bên phải nếu nó là null
    const [toDo, setToDo] = useState(() => {
        const storageJobs = JSON.parse(localStorage.getItem('jobs'));

        return storageJobs ?? [];
    });

    // console.log(toDo);
    const handleSubmit = () => {
        setToDo(prevs => {
            const newJobs = [...prevs, job];
            
            const jsonJobs = JSON.stringify(newJobs);
            localStorage.setItem('jobs', jsonJobs);
            console.log(jsonJobs);
            return newJobs;
        });
        setJob('');
    }

    const handleDelete = (index) => {
       toDo.splice(index, 1);
       setToDo(prev => {
        const newToDo = [...prev];
        const jsonJobs = JSON.stringify(newToDo);
        localStorage.setItem('jobs', jsonJobs);
        return newToDo;
       })
    }

    return (
        <div style={{padding: 20}}>
            <input value={job} 
                onChange={(e => setJob(e.target.value))}
                onKeyDown={(event => event.keyCode === 13 && handleSubmit())}
            />
            <button onClick={handleSubmit} style={{marginLeft: 15}}>ADD</button>
            <ul>
                {
                    toDo.map((job, index) => (
                        <div>
                            <li key={index}> 
                                {job}

                                <button  
                                    key={index}
                                    style={{margin: 15}}
                                    onClick={() => handleDelete(index)}
                                > Xoa
                                </button>
                            </li>
                        </div>
                    ))
                }
            </ul>
        </div>
    )
}

export default ToDoList