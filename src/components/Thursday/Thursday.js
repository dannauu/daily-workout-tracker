import React, { useEffect, useState } from 'react'
import DumbbellShoulderPressImg from '../assets/img/shoulders/dumbbellShoulderPress.png'
import ShrugsImg from '../assets/img/shoulders/shrugs.png'
import ReverseFlysImg from '../assets/img/shoulders/reverseFly.png'
import LateralRaisesImg from '../assets/img/shoulders/lateralRaise.png'
import MachineShoulderPressImg from '../assets/img/shoulders/machineShoulderPress.png'
import BehindShrugsImg from '../assets/img/shoulders/behindShrugs.png'
import dayjs from 'dayjs';
import { Route, Routes, Link } from "react-router-dom"
import BehindBackShrugs from './BehindBackShrugs'
import MachineShoulderPress from './MachineShoulderPress'
import LateralRaises from './LateralRaises'
import ReverseFly from './ReverseFly'
import Shrugs from './Shrugs'
import DumbbellShoulderPress from './DumbbellShoulderPress'
import RandomQuote from "../RandomQuote/RandomQuote";

const Thursday = () => {
  const date = dayjs().format('MMM D, YYYY')
  const [data, setData] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem('done');
    if (storedData) {
      setData(JSON.parse(storedData));

      if (storedData.includes('dumbbell-shoulder-press')) {
        document.getElementById('dumbbell-shoulder-press').classList.add('crossout-container')
      }
      if (storedData.includes('shrugs')) {
        document.getElementById('shrugs').classList.add('crossout-container')
      }
      if (storedData.includes('reverse-fly')) {
        document.getElementById('reverse-fly').classList.add('crossout-container')
      }
      if (storedData.includes('lateral-raises')) {
        document.getElementById('lateral-raises').classList.add('crossout-container')
      }
      if (storedData.includes('machine-shoulder-press')) {
        document.getElementById('machine-shoulder-press').classList.add('crossout-container')
      }
      if (storedData.includes('behind-back-shrugs')) {
        document.getElementById('behind-back-shrugs').classList.add('crossout-container')
      }
    }
  }, []);

  return (
    <div className='text-white min-h-screen'>
      <div>
        <p className='text-center'>Gym Hours: 5:00AM-9:00PM</p>
        <p className='text-center'>Today: {date}</p>
        <h1 className='text-center text-6xl p-1 bg-white text-black'>Thursday</h1>
        <h2 className='text-center text-2xl p-3 text-green-600'>Shoulders</h2>
      </div>
      <div className='grid grid-cols-3 gap-4 place-items-center mb-10'>
        <Link to='/thursday/dumbbell-shoulder-press' className='shadow-md shadow-white' id='dumbbell-shoulder-press'>
          <img src={DumbbellShoulderPressImg} className='img rounded' alt='img'></img>
        </Link>
        <Link to='/thursday/shrugs' className='shadow-md shadow-white' id='shrugs'>
          <img src={ShrugsImg} className='img rounded' alt='img'></img>
        </Link>
        <Link to='/thursday/reverse-fly' className='shadow-md shadow-white' id='reverse-fly'>
          <img src={ReverseFlysImg} className='img rounded' alt='img'></img>
        </Link>
        <Link to='/thursday/lateral-raises' className='shadow-md shadow-white' id='lateral-raises'>
          <img src={LateralRaisesImg} className='img rounded' alt='img'></img>
        </Link>
        <Link to='/thursday/machine-shoulder-press' className='shadow-md shadow-white' id='machine-shoulder-press'>
          <img src={MachineShoulderPressImg} className='img rounded' alt='img'></img>
        </Link>
        <Link to='/thursday/behind-back-shrugs' className='shadow-md shadow-white' id='behind-back-shrugs'>
          <img src={BehindShrugsImg} className='img rounded' alt='img'></img>
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<RandomQuote />} />
        <Route path="/behind-back-shrugs" element={<BehindBackShrugs />} />
        <Route path="/machine-shoulder-press" element={<MachineShoulderPress />} />
        <Route path="/lateral-raises" element={<LateralRaises />} />
        <Route path="/reverse-fly" element={<ReverseFly />} />
        <Route path="/shrugs" element={<Shrugs />} />
        <Route path="/dumbbell-shoulder-press" element={<DumbbellShoulderPress />} />
      </Routes>
    </div>
  )
}

export default Thursday