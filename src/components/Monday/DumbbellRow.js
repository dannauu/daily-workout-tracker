import React, { useState, useEffect } from 'react'
import DumbbellRowImg from '../assets/img/back/dumbbellRow.png'
import dayjs from 'dayjs';
import { TfiSave } from 'react-icons/tfi'
import localStorageHelper from '../localStorage'

const DumbbellRow = () => {
    const [value, setValue] = useState(25);
    const [items, setItems] = useState([]);
    const [showMessage, setShowMessage] = useState(false);
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
        setShowMessage(true);
        setTimeout(() => {
            window.location.reload()
        }, 500);
    }

    const markDone = event => {
        localStorageHelper('done', 'dumbbell-row')
        window.location.href = '/'
    }


    return (
        <div className='p-2 h-96 bg-contain bg-no-repeat font-semibold' style={{ backgroundImage: `url(${DumbbellRowImg})` }}>
            <div className='bg-black/50 p-2'>
                <h1 className='text-2xl'>Dumbbell Row</h1>
                <h2 className='mb-4'>Last Weeks Weight: <span className='text-lime-500 font-extrabold'>{items}</span></h2>
                <div className="flex">
                    <button className="bg-red-500 text-white px-4" onClick={decrement}>-</button>
                    <input type="number" value={value} className="w-2/12 text-center ml-2 text-black" onChange={handleChange}/>
                    <button className="bg-green-500 text-white px-4 ml-2" onClick={increment}>+</button>
                    <button className="bg-blue-500 text-white p-2 ml-10 text-2xl rounded-mg" onClick={handleSave}><TfiSave/></button>
                    <button className='bg-blue-900 ml-2 p-2' onClick={markDone}>Mark Done</button>
                </div>
            </div>
            {showMessage && <p className="bg-green-500 text-center mt-2">Weight Saved!</p>}
        </div>
    )
}

export default DumbbellRow