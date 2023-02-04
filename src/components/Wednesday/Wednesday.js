import React, { useEffect } from 'react'
import BulgarianSquatImg from '../assets/img/legs/bulgarianSquat.png'
import CalfRaisesImg from '../assets/img/legs/calfRaises.png'
import LegPressImg from '../assets/img/legs/legPress.png'
import LungesImg from '../assets/img/legs/lunges.png'
import SquatImg from '../assets/img/legs/squat.png'
import WallsitImg from '../assets/img/legs/wallsit.png'
import dayjs from 'dayjs';
import { Route, Routes, Link } from "react-router-dom"
import BulgarianSquats from './BulgarianSquats'
import CalfRaises from './CalfRaises'
import LegPress from './LegPress'
import Lunges from './Lunges'
import Squats from './Squats'
import Wallsit from './Wallsit'
import RandomQuote from "../RandomQuote/RandomQuote";

const Wednesday = () => {

  const date = dayjs().format('MMM D, YYYY')

  return (
    <div className='text-white min-h-screen'>
      <div>
        <p className='text-center'>Gym Hours: 5:00AM-9:00PM</p>
        <p className='text-center'>Today: {date}</p>
        <h1 className='text-center text-6xl p-1 bg-white text-black'>Wednesday</h1>
        <h2 className='text-center text-2xl p-3 text-green-600'>Legs</h2>
      </div>
      <div className='grid grid-cols-3 gap-4 place-items-center mb-10'>
        <Link to='/bulgarian-squats' className='shadow-md shadow-white'>
          <img src={BulgarianSquatImg} className='img rounded' alt='img'></img>
        </Link>
        <Link to='/calf-raises' className='shadow-md shadow-white'>
          <img src={CalfRaisesImg} className='img rounded' alt='img'></img>
        </Link>
        <Link to='/leg-press' className='shadow-md shadow-white'>
          <img src={LegPressImg} className='img rounded' alt='img'></img>
        </Link>
        <Link to='/lunges' className='shadow-md shadow-white'>
          <img src={LungesImg} className='img rounded' alt='img'></img>
        </Link>
        <Link to='/squats' className='shadow-md shadow-white'>
          <img src={SquatImg} className='img rounded' alt='img'></img>
        </Link>
        <Link to='/wallsit' className='shadow-md shadow-white'>
          <img src={WallsitImg} className='img rounded' alt='img'></img>
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<RandomQuote />} />
        <Route path="/bulgarian-squats" element={<BulgarianSquats />} />
        <Route path="/calf-raises" element={<CalfRaises />} />
        <Route path="/leg-press" element={<LegPress />} />
        <Route path="/lunges" element={<Lunges />} />
        <Route path="/squats" element={<Squats />} />
        <Route path="/wallsit" element={<Wallsit />} />
      </Routes>
    </div>
  )
}

export default Wednesday