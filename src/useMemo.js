import { useMemo, useRef, useState } from "react";


function UseMemo(){ 

    const [name, setName] = useState('');
    const [price, setPrice] = useState();
    const [products, setProducts]  = useState([]);

    const nameRef = useRef();

    const handleSubmit = () => {
        
        setProducts([...products, {
            name,
            // convert String price to number price => Number(price) / parseInt(price) / +price
            price: parseInt(price)
        }]);
        setName('');
        setPrice('');
        nameRef.current.focus();
    }

    console.log(nameRef.current);

    const total = useMemo(() => {
        const sum = products.reduce((result, prod) =>{
            // sau khi add lần đầu tiên, lần tiếp theo chỉ nhập vào input, total render không cần thiết
            // dùng useMemo
            console.log('re-render');
            return result + prod.price;
        }, 0)
        return sum;
    }, [products])

    return ( 
        <div style={{padding: 20}}>
            <input 
                ref={nameRef}
                placeholder='Enter name'
                value={name}
                onChange={e => setName(e.target.value)}
            />
            
            <input 
                placeholder='Enter Price'
                value={price}
                onChange={e => setPrice(e.target.value)}
                onKeyDown={e => e.keyCode === 13 && handleSubmit()}
            />

            <button onClick={handleSubmit}
                >Add</button>
            <br />
            <span>Total: {total}</span>
            <ul>
                {
                    products.map((product, index) => (
                        <li key={index}>{product.name} - {product.price}</li>
                    ))
                }
            </ul>
        </div>
    );
}
 
export default UseMemo;