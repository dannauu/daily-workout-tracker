import React, { useState, useEffect } from 'react'
import dayjs from 'dayjs';
import { TfiSave } from 'react-icons/tfi'
import LateralRaisesImg from '../assets/img/shoulders/lateralRaise.png'

const LateralRaises = () => {
    const [value, setValue] = useState(25);
    const [items, setItems] = useState([]);
    const increment = () => setValue(value + 5);
    const decrement = () => setValue(value - 5);
  
    const handleChange = event => {
        console.log(value)
    };
  
    useEffect(() => {
        const storedItems = localStorage.getItem('Lateral-Raises') || [];
        setItems(storedItems);
      }, []);
  
    const handleSave = event => {
        const date = dayjs().format('MMM D, YYYY')
        localStorage.setItem('Lateral-Raises', `${value +  ' pounds on '  + date}`)
        window.location.reload();
    }
  
    return (
        <div className='p-2 min-h-screen bg-no-repeat bg-contain font-semibold' style={{ backgroundImage: `url(${LateralRaisesImg})` }}>
            <div className='bg-black/50 p-2'>
                <h1 className='text-2xl'>Lateral Raises</h1>
                <h2 className='mb-4'>Last Weeks Weight: <span className='text-lime-500 font-extrabold'>{items}</span></h2>
                <div className="flex">
                    <button className="bg-red-500 text-white px-4" onClick={decrement}>-</button>
                    <input type="number" value={value} className="text-black w-2/12 text-center ml-2" onChange={handleChange}/>
                    <button className="bg-green-500 text-white px-4 ml-2" onClick={increment}>+</button>
                    <button className="bg-blue-500 text-white p-2 ml-10 text-2xl rounded-mg" onClick={handleSave}><TfiSave/></button>
                </div>
            </div>
        </div>
    )
}

export default LateralRaises