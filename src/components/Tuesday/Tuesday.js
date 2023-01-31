import React from "react"
import InclineBenchImg from '../assets/img/chest/inclineChestPress.png';
import DeclineBenchImg from '../assets/img/chest/declineChestPress.png';
import DumbbellChestFlyImg from '../assets/img/chest/dumbbellChestFly.png';
import CableFlyImg from '../assets/img/chest/cableFlys.png'
import DumbbellChestPressImg from '../assets/img/chest/dumbbellChestPress.png'
import MachineChestPressImg from '../assets/img/chest/machineChestPress.png'
import dayjs from 'dayjs';
import { Route, Routes, Link } from "react-router-dom"
import InclineBench from "./InclineBench";
import DeclineBench from "./DeclineBench";
import DumbbellChestFly from "./DumbbellChestFly";
import CableFly from "./CableFly";
import DumbbellChestPress from "./DumbbellChestPress";
import MachineChestPress from "./MachineChestPress";
import RandomQuote from "../RandomQuote/RandomQuote";

const Tuesday = () => {

  const date = dayjs().format('MMM D, YYYY')

  return (
    <div className='text-white min-h-screen'>
      <div>
        <p className='text-center'>Gym Hours: 5:00AM-9:00PM</p>
        <p className='text-center'>Today: {date}</p>
        <h1 className='text-center text-6xl p-1 bg-white text-black'>Tuesday</h1>
        <h2 className='text-center text-2xl p-3 text-green-600'>Chest</h2>
      </div>
      <div className='grid grid-cols-3 gap-4 place-items-center mb-10'>
        <Link to='/incline-bench' className='shadow-md shadow-white'>
          <img src={InclineBenchImg} className='img rounded' alt='img'></img>
        </Link>
        <Link to='/decline-bench' className='shadow-md shadow-white'>
          <img src={DeclineBenchImg} className='img rounded' alt='img'></img>
        </Link>
        <Link to='/dumbbell-chest-fly' className='shadow-md shadow-white'>
          <img src={DumbbellChestFlyImg} className='img rounded' alt='img'></img>
        </Link>
        <Link to='/cable-fly' className='shadow-md shadow-white'>
          <img src={CableFlyImg} className='img rounded' alt='img'></img>
        </Link>
        <Link to='/dumbbell-chest-press' className='shadow-md shadow-white'>
          <img src={DumbbellChestPressImg} className='img rounded' alt='img'></img>
        </Link>
        <Link to='/machine-chest-press' className='shadow-md shadow-white'>
          <img src={MachineChestPressImg} className='img rounded' alt='img'></img>
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<RandomQuote/>} />
        <Route path="/incline-bench" element={<InclineBench />} />
        <Route path="/decline-bench" element={<DeclineBench />} />
        <Route path="/dumbbell-chest-fly" element={<DumbbellChestFly />} />
        <Route path="/cable-fly" element={<CableFly />} />
        <Route path="/dumbbell-chest-press" element={<DumbbellChestPress />} />
        <Route path="/machine-chest-press" element={<MachineChestPress />} />
      </Routes>
    </div>
  )
}

export default Tuesday