import React, { useEffect } from 'react'
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

  return (
    <div className='text-white min-h-screen'>
      <div>
        <p className='text-center'>Gym Hours: 5:00AM-9:00PM</p>
        <p className='text-center'>Today: {date}</p>
        <h1 className='text-center text-6xl p-1 bg-white text-black'>Thursday</h1>
        <h2 className='text-center text-2xl p-3 text-green-600'>Shoulders</h2>
      </div>
      <div className='grid grid-cols-3 gap-4 place-items-center mb-10'>
        <Link to='/dumbbell-shoulder-press' className='shadow-md shadow-white'>
          <img src={DumbbellShoulderPressImg} className='img rounded' alt='img'></img>
        </Link>
        <Link to='/shrugs' className='shadow-md shadow-white'>
          <img src={ShrugsImg} className='img rounded' alt='img'></img>
        </Link>
        <Link to='/reverse-fly' className='shadow-md shadow-white'>
          <img src={ReverseFlysImg} className='img rounded' alt='img'></img>
        </Link>
        <Link to='/lateral-raises' className='shadow-md shadow-white'>
          <img src={LateralRaisesImg} className='img rounded' alt='img'></img>
        </Link>
        <Link to='/machine-shoulder-press' className='shadow-md shadow-white'>
          <img src={MachineShoulderPressImg} className='img rounded' alt='img'></img>
        </Link>
        <Link to='/behind-back-shrugs' className='shadow-md shadow-white'>
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