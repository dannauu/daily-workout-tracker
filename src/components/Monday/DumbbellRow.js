import React, { useState, useEffect } from 'react'
import DumbbellRowImg from '../assets/img/back/dumbbellRow.png'
import dayjs from 'dayjs';
import { TfiSave } from 'react-icons/tfi'

const DumbbellRow = () => {
    const [value, setValue] = useState(25);
    const [items, setItems] = useState([]);
    const increment = () => setValue(value + 5);
    const decrement = () => setValue(value - 5);

    const handleChange = event => {
        console.log(value)
    };

    useEffect(() => {
        const storedItems = localStorage.getItem('Dumbbell-Row') || [];
        setItems(storedItems);
      }, []);

    const handleSave = event => {
        console.log(`saved value: ${value}`)
        const date = dayjs().format('MMM D, YYYY')
        localStorage.setItem('Dumbbell-Row', `${value +  ' pounds on '  + date}`)
        window.location.href = '/';
    }

    return (
        <div className='p-2 min-h-screen bg-no-repeat bg-contain font-semibold' style={{ backgroundImage: `url(${DumbbellRowImg})` }}>
            <div className='bg-black/50 p-2'>
                <h1 className='text-2xl'>Dumbbell Row</h1>
                <h2 className='mb-4'>Last Weeks Weight: <span className='text-lime-500 font-extrabold'>{items}</span></h2>
                <div className="flex">
                    <button className="bg-red-500 text-white px-4" onClick={decrement}>-</button>
                    <input type="number" value={value} className="w-2/12 text-center ml-2" onChange={handleChange}/>
                    <button className="bg-green-500 text-white px-4 ml-2" onClick={increment}>+</button>
                    <button className="bg-blue-500 text-white p-2 ml-10 text-2xl rounded-mg" onClick={handleSave}><TfiSave/></button>
                </div>
            </div>
        </div>
    )
}

export default DumbbellRow