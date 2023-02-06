import React, { useEffect, useState } from 'react'
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
  const [data, setData] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem('done');
    if (storedData) {
      setData(JSON.parse(storedData));

      if (storedData.includes('bulgarian')) {
        document.getElementById('bulgarian').classList.add('crossout-container')
      }
      if (storedData.includes('calf-raises')) {
        document.getElementById('calf-raises').classList.add('crossout-container')
      }
      if (storedData.includes('leg-press')) {
        document.getElementById('leg-press').classList.add('crossout-container')
      }
      if (storedData.includes('lunges')) {
        document.getElementById('lunges').classList.add('crossout-container')
      }
      if (storedData.includes('squats')) {
        document.getElementById('squats').classList.add('crossout-container')
      }
      if (storedData.includes('wallsit')) {
        document.getElementById('wallsit').classList.add('crossout-container')
      }
    }
  }, []);


  return (
    <div className='text-white min-h-screen'>
      <div className='text-center'>
        <p>Gym Hours: 5:00AM-9:00PM</p>
        <p>Today: {date}</p>
        <h1 className='text-6xl p-1 bg-white text-black'>Wednesday</h1>
        <h2 className='text-2xl p-3 text-green-600'>Legs</h2>
      </div>
      <div className='grid grid-cols-3 gap-4 place-items-center mb-10'>
        <Link to='/wednesday/bulgarian' className='shadow-md shadow-white' id='bulgarian'>
          <img src={BulgarianSquatImg} className='img rounded' alt='img'></img>
        </Link>
        <Link to='/wednesday/calf-raises' className='shadow-md shadow-white' id='calf-raises'>
          <img src={CalfRaisesImg} className='img rounded' alt='img'></img>
        </Link>
        <Link to='/wednesday/leg-press' className='shadow-md shadow-white' id='leg-press'>
          <img src={LegPressImg} className='img rounded' alt='img'></img>
        </Link>
        <Link to='/wednesday/lunges' className='shadow-md shadow-white' id='lunges'>
          <img src={LungesImg} className='img rounded' alt='img'></img>
        </Link>
        <Link to='/wednesday/squats' className='shadow-md shadow-white' id='squats'>
          <img src={SquatImg} className='img rounded' alt='img'></img>
        </Link>
        <Link to='/wednesday/wallsit' className='shadow-md shadow-white' id='wallsit'>
          <img src={WallsitImg} className='img rounded' alt='img'></img>
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<RandomQuote />} />
        <Route path="/bulgarian" element={<BulgarianSquats />} />
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