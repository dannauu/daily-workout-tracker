import React, { useState, useEffect } from 'react'
import dayjs from 'dayjs';
import { TfiSave } from 'react-icons/tfi'
import DumbbellChestFlyImg from '../assets/img/chest/dumbbellChestFly.png';
import localStorageHelper from '../localStorage'

const TricepExtension = () => {
    const [value, setValue] = useState(25);
    const [items, setItems] = useState([]);
    const increment = () => setValue(value + 5);
    const decrement = () => setValue(value - 5);
  
    const handleChange = event => {
        console.log(value)
    };
  
    useEffect(() => {
        const storedItems = localStorage.getItem('Tricep-Extension') || [];
        setItems(storedItems);
      }, []);
  
    const handleSave = event => {
        const date = dayjs().format('MMM D, YYYY')
        localStorage.setItem('Tricep-Extension', `${value +  ' pounds on '  + date}`)
        window.location.reload()

    }
    
    const markDone = event => {
        localStorageHelper('done', 'tricep-extension')
        window.location.href = '/'

    }
  
    return (
        <div className='p-2 h-96 bg-contain font-semibold' style={{ backgroundImage: `url(${DumbbellChestFlyImg})` }}>
            <div className='bg-black/50 p-2'>
                <h1 className='text-2xl'>Tricep Extension</h1>
                <h2 className='mb-4'>Last Weeks Weight: <span className='text-lime-500 font-extrabold'>{items}</span></h2>
                <div className="flex">
                    <button className="bg-red-500 text-white px-4" onClick={decrement}>-</button>
                    <input type="number" value={value} className="text-black w-2/12 text-center ml-2" onChange={handleChange}/>
                    <button className="bg-green-500 text-white px-4 ml-2" onClick={increment}>+</button>
                    <button className="bg-blue-500 text-white p-2 ml-10 text-2xl rounded-mg" onClick={handleSave}><TfiSave/></button>
                    <button className='bg-blue-900 ml-2 p-2' onClick={markDone}>Mark Done</button>
                </div>
            </div>
        </div>
    )
}

export default TricepExtension