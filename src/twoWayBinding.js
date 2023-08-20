import {useState} from 'react'

const gifts = ['Yasuo', 'Riven', 'Leesin'];

const courses = [
    {
        id: 1,
        name: 'HTML, CSS'
    }, 
    {
        id: 2,
        name: 'Javascript'
    }, 
    {
        id: 3,
        name: 'ReactJS'
    }
]

const listItem = [
    {
        id: 1,
        name: 'Eggs'
    }, 
    {
        id: 2,
        name: 'Fish'
    }, 
    {
        id: 3,
        name: 'Vegatable'
    }
]


function TwoBinding() {

    const [gift, setGift] = useState();
    const [checked, setChecked] = useState(1);
    const [checkBox, setCheckBox] = useState([]);
    
    // console.log(checkBox);

    const randomGift = () => {
        const item = Math.floor(Math.random() * gifts.length);
        setGift(gifts[item]);
    }

    
    const handleCheckbox = (id) => {
        const check = checkBox.includes(id);

        setCheckBox(prevs => {
            if(check) {
               return checkBox.filter(item => item!== id);
            } else {
                return [...prevs, id];
            }
        })
    }

    const handleSubmitCheckBox = () => {
        console.log({id: checkBox});
    }

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = () => {
        console.log({name, email});
    }

    return (
        <div style={{paddingLeft: 20, marginBottom: 60}}>
            <span style={{color: 'red'}}>------TwoWayBinding-------</span>
            <h1>{gift || 'Chưa có'}</h1>
            <button onClick={randomGift}>Take Gift</button>

            <div>
                {courses.map(course => (
                    <div key={course.id}>
                        <div style={{margin: 14}}>
                            <input
                                type="radio"
                                checked={checked === course.id}
                                onChange={() => setChecked(course.id)}
                            /> {course.name}
                        </div>
                    </div>
                ))}
            </div>
             
            <div style={{marginBottom: 30}}>
                {listItem.map(item => (
                    <div style={{margin: 14}} key={item.id}>
                        <input  type="checkbox"
                            checked ={checkBox.includes(item.id)}   
                            onChange={() => handleCheckbox(item.id)}
                        /> {item.name}
                    </div>
                ))}
                <button onClick={handleSubmitCheckBox}>Submit</button>
            </div>


            <input value={name} onChange={e => setName(e.target.value)}/>
            <input value={email} onChange={e => setEmail(e.target.value)}/>
            <button onClick={handleSubmit}>Register</button>
            <br />
            <span style={{color: 'red'}}>------TwoWayBinding-------</span>
        </div>
        
           
    )
}

export default TwoBinding;