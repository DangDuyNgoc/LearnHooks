import {useState} from 'react'

const orders = [100, 200, 300];

function UseState() {
    /*
    const total =  orders.reduce((total, cur) =>  total + cur);
    console.log(total);
    giá trị total sẽ được tính lại, thừa không cần thiết khi dùng initState
    */

    const [counter, setCounter] = useState(1);

    const [stateCallbak, setStateCall] = useState(1);

    const [order, setOders] = useState(() => {
        const total =  orders.reduce((total, cur) =>  total + cur);
        return total;
    });

    const [infor, setInfor] = useState({
        name: 'Nguyen Van A',
        age: 18,
    });

    const handleUp = () => {
        setCounter(counter + 1);
        setCounter(counter + 1);
        setCounter(counter + 1);
        // gọi nhiều lần, nhưng giá trị của counter vẫn là 1
    };

    const handleUpCallback = () => {
        setStateCall((preState) => preState +1);
        setStateCall((preState) => preState +1);
        setStateCall((preState) => preState +1);
    };

    const handleUpOrder = () => {
        setOders(order + 1);
    };

    const updateInfor = () => {
        setInfor(prev => ({
            ...prev,
            addres: 'DN, VN'
        }))
    } 

    return (
        <div className="useState" style={{padding: 20}}>
            <span style={{color: 'red'}}>------Begin UseState-------</span>
            <h1>{counter} time</h1>
            <button onClick={handleUp} style={{margin: 10}}>Increase Time</button>

            <h1>{stateCallbak} setState callback</h1>
            <button onClick={handleUpCallback} style={{margin: 10}}>setStateCallBack</button>

            <h2>{order} order</h2>
            <button onClick={handleUpOrder}>Up Order</button>

            <h3>{JSON.stringify(infor)}</h3>
            <button onClick={updateInfor}>change value of state</button>
            <br />
            <span style={{color: 'red'}}>------End UseState-------</span>
        </div>
    );
}

export default UseState;
