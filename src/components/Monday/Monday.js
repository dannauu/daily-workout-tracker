import React, {useEffect, useState} from 'react'
import LatpulldownImg from '../assets/img/back/lat-pulldown.png'
import DumbbellRowImg from '../assets/img/back/dumbbellRow.png'
import SeatedRowsImg from '../assets/img/back/seatedRows.png'
import BentOverRowImg from '../assets/img/back/bentOverRow.png'
import BackExtensionImg from '../assets/img/back/backExtension.png'
import DeadliftImg from '../assets/img/back/deadlift.png'
import { Route, Routes, Link } from "react-router-dom"
import Deadlift from './Deadlift'
import BackExtension from './BackExtension'
import SeatedRows from './SeatedRows'
import BentOverRows from './BentOverRows'
import DumbbellRow from './DumbbellRow'
import LatPullDown from './LatPullDown'
import dayjs from 'dayjs';
import RandomQuote from "../RandomQuote/RandomQuote";


const Monday = () => {
  const date = dayjs().format('MMM D, YYYY')
  const [data, setData] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem('done');
    if (storedData) {
      setData(JSON.parse(storedData));

      if (storedData.includes('deadlift')) {
        document.getElementById('deadlift').classList.add('crossout-container')
      }
      if (storedData.includes('back-extension')) {
        document.getElementById('back-extension').classList.add('crossout-container')
      }
      if (storedData.includes('seated-rows')) {
        document.getElementById('seated-rows').classList.add('crossout-container')
      }
      if (storedData.includes('bent-over-rows')) {
        document.getElementById('bent-over-rows').classList.add('crossout-container')
      }
      if (storedData.includes('dumbbell-row')) {
        document.getElementById('dumbbell-row').classList.add('crossout-container')
      }
      if (storedData.includes('lat-pulldown')) {
        document.getElementById('lat-pulldown').classList.add('crossout-container')
      }
    }
  }, []);


  return (
    <div className='text-white min-h-screen'>
      <div className='text-center'>
        <p>Gym Hours: 5:00AM-9:00PM</p>
        <p>Today: {date}</p>
        <h1 className='text-6xl p-1 '>Monday</h1>
        <h2 className='text-2xl p-3'>Back</h2>
      </div>
      <div className='grid grid-cols-3 gap-4 place-items-center mb-10'>
        <Link to='/monday/deadlift' className='' id='deadlift'>
          <img src={DeadliftImg} className='img rounded' alt='img'></img>
        </Link>
        <Link to='/monday/back-extension' className='' id='back-extension'>
          <img src={BackExtensionImg} className='img rounded' alt='img'></img>
        </Link>
        <Link to='/monday/seated-rows' className='' id='seated-rows'>
          <img src={SeatedRowsImg} className='img rounded' alt='img'></img>
        </Link>
        <Link to='/monday/bent-over-rows' className='' id='bent-over-rows'>
          <img src={BentOverRowImg} className='img rounded' alt='img'></img>
        </Link>
        <Link to='/monday/dumbbell-row' className='' id='dumbbell-row'>
          <img src={DumbbellRowImg} className='img rounded' alt='img'></img>
        </Link>
        <Link to='/monday/lat-pulldown' className='' id='lat-pulldown'>
          <img src={LatpulldownImg} className='img rounded' alt='img'></img>
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<RandomQuote />} />
        <Route path="/deadlift" element={<Deadlift />} />
        <Route path="/back-extension" element={<BackExtension />} />
        <Route path="/seated-rows" element={<SeatedRows />} />
        <Route path="/bent-over-rows" element={<BentOverRows />} />
        <Route path="/dumbbell-row" element={<DumbbellRow />} />
        <Route path="/lat-pulldown" element={<LatPullDown />} />
      </Routes>
    </div>

  )
}

export default Monday