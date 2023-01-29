import React, { useState, useEffect } from 'react'
import LatpulldownImg from '../assets/img/back/lat-pulldown.png'
import DumbbellRowImg from '../assets/img/back/dumbbellRow.png'
import SeatedRowsImg from '../assets/img/back/seatedRows.png'
import BentOverRowImg from '../assets/img/back/bentOverRow.png'
import BackExtensionImg from '../assets/img/back/backExtension.png'
import DeadliftImg from '../assets/img/back/deadlift.png'
import { Route, Routes, Link } from "react-router-dom"
import Deadlift from './Deadlift'
import BackExtension from './BackExtension'
import { SeatedRows } from './SeatedRows'
import BentOverRows from './BentOverRows'
import DumbbellRow from './DumbbellRow'
import LatPullDown from './LatPullDown'
import dayjs from 'dayjs';


const Monday = () => {

  const date = dayjs().format('MMM D, YYYY')

  return (
    <>
      <div className='text-white'>
        <p className='text-center'>Gym Hours: 5:00AM-9:00PM</p>
        <p className='text-center'>Today: {date}</p>
        <h1 className='text-center text-6xl p-2 bg-white text-black'>Monday</h1>
        <h2 className='text-center text-2xl p-3 text-green-600'>Back</h2>
      </div>
      <div className='grid grid-cols-3 gap-4 place-items-center mb-10'>
        <Link to='/deadlift'>
          <img src={DeadliftImg} className='img rounded'></img>
        </Link>
        <Link to='/back-extension'>
          <img src={BackExtensionImg} className='img rounded'></img>
        </Link>
        <Link to='/seated-rows'>
          <img src={SeatedRowsImg} className='img rounded'></img>
        </Link>
        <Link to='/bent-over-rows'>
          <img src={BentOverRowImg} className='img rounded'></img>
        </Link>
        <Link to='/dumbbell-row'>
          <img src={DumbbellRowImg} className='img rounded'></img>
        </Link>
        <Link to='/lat-pulldown'>
          <img src={LatpulldownImg} className='img rounded'></img>
        </Link>
      </div>
      <Routes>
        <Route path="/deadlift" element={<Deadlift />} />
        <Route path="/back-extension" element={<BackExtension />} />
        <Route path="/seated-rows" element={<SeatedRows />} />
        <Route path="/bent-over-rows" element={<BentOverRows />} />
        <Route path="/dumbbell-row" element={<DumbbellRow />} />
        <Route path="/lat-pulldown" element={<LatPullDown />} />
      </Routes>
    </>

  )
}

export default Monday