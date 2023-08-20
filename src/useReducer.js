import { useReducer, useRef } from "react";

function UseReducer() {

    const initialState = 0;
    const initialJob ={
        job: '',
        jobs: []
    };

    const UP_ACTIONS = 'up';
    const DOWN_ACTIONS = 'down';

    const SET_JOb = 'set_job';
    const ADD_JOB = 'add';
    const REMOVE_JOB = 'remove';

    const setJob = payload => {
        return {
            type: SET_JOb,
            payload
        }
    };

     const addJob = payload => {
        return {
            type: ADD_JOB,
            payload
        }
    };

    const removeJob = payload => {
        return {
            type: REMOVE_JOB,
            payload
        }
    }

    const todoReducer = (state, actions) => {
        switch (actions.type) {
            case SET_JOb: 
                return {
                    ...state,
                    job: actions.payload
                }
            case ADD_JOB:
                return {
                    ...state,
                    jobs: [...state.jobs, actions.payload]
                }

             case REMOVE_JOB:
                const newJob = [...state.jobs];
                newJob.splice(actions.payload, 1);
                return {
                    ...state,
                    jobs: newJob
                }
            default: 
                throw new Error('Invalid Actions')
        }
    }

    const reducer = (state, actions) => {
        switch(actions) {
            case UP_ACTIONS: 
                return state +1;
            case DOWN_ACTIONS:
                return state -1;
            default: 
                throw new Error('Invalid Action')
        }
    }

    const [count, dispatch] = useReducer(reducer, initialState);

    const [state, dispatchJob] = useReducer(todoReducer, initialJob);
    const { job, jobs } = state;

    const inputRef = useRef();

    const handleSubmit = () => {
        dispatchJob(addJob(job))
        dispatchJob(setJob(''))
        inputRef.current.focus();
    }

    return ( 
        <div style={{padding: 20}}>
            <span style={{color: 'red'}}>------Begin UseReducer-------</span>
            <h1 style={{margin: 2}}>{count}</h1>
            <button
                onClick={()=> dispatch(UP_ACTIONS)}
            >
                UP
            </button>

            <button
                onClick={()=> dispatch(DOWN_ACTIONS)}
            >
                Down
            </button>
            <br />

            <h2>Todo with useReducer</h2>
            <input 
                ref={inputRef}
                value={job}
                placeholder='Enter Job'
                onChange={e => {
                    dispatchJob(setJob(e.target.value))
                }}
            />
            <button onClick={handleSubmit}>ADD</button>
            {
                jobs.map((job, index) => (
                    <>
                        <li key={index}>{job}
                            <span onClick={() => dispatchJob(removeJob(index))}>&times;</span>
                        </li>
                    </>
                ))
            }
            <br />
            <span style={{color: 'red'}}>------End UseReducer-------</span>
        </div>
    );
}

export default UseReducer;