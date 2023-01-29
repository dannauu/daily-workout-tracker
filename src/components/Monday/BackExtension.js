import React, { useState, useEffect } from 'react'
import BackExtensionImg from '../assets/img/back/backExtension.png'
import dayjs from 'dayjs';
import { TfiSave } from 'react-icons/tfi'

const BackExtension = () => {
  const [value, setValue] = useState(25);
    const [items, setItems] = useState([]);
    const increment = () => setValue(value + 5);
    const decrement = () => setValue(value - 5);

    const handleChange = event => {
        console.log(value)
    };

    useEffect(() => {
        const storedItems = localStorage.getItem('Back-Extension') || [];
        setItems(storedItems);
      }, []);

    const handleSave = event => {
        console.log(`saved value: ${value}`)
        const date = dayjs().format('MMM D, YYYY')
        localStorage.setItem('Back-Extension', `${value +  ' pounds on '  + date}`)
        window.location.reload();
    }

    return (
        <div className='p-2 min-h-screen bg-no-repeat bg-contain font-semibold' style={{ backgroundImage: `url(${BackExtensionImg})` }}>
            <div className='bg-black/50 p-2'>
                <h1 className='text-2xl'>Back Extension</h1>
                <h2>Last Weeks Weight: <span className='text-lime-500'>{items}</span></h2>
                <div className="flex">
                    <button className="bg-red-500 text-white px-4" onClick={decrement}>-</button>
                    <input type="number" value={value} className="w-2/12 text-center" onChange={handleChange}/>
                    <button className="bg-green-500 text-white px-4" onClick={increment}>+</button>
                    <button className="bg-blue-500 text-white p-2 ml-1 rounded-mg" onClick={handleSave}><TfiSave/></button>
                </div>
            </div>
        </div>
    )
}

export default BackExtension