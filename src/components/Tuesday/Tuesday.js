import React, {useEffect, useState} from "react"
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
  const [data, setData] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem('done');
    if (storedData) {
      setData(JSON.parse(storedData));

      if (storedData.includes('incline-bench')) {
        document.getElementById('incline-bench').classList.add('crossout-container')
      }
      if (storedData.includes('decline-bench')) {
        document.getElementById('decline-bench').classList.add('crossout-container')
      }
      if (storedData.includes('dumbbell-chest-fly')) {
        document.getElementById('dumbbell-chest-fly').classList.add('crossout-container')
      }
      if (storedData.includes('cable-fly')) {
        document.getElementById('cable-fly').classList.add('crossout-container')
      }
      if (storedData.includes('dumbbell-chest-press')) {
        document.getElementById('dumbbell-chest-press').classList.add('crossout-container')
      }
      if (storedData.includes('machine-chest-press')) {
        document.getElementById('machine-chest-press').classList.add('crossout-container')
      }
    }
  }, []);

  return (
    <div className='text-white min-h-screen'>
      <div className='text-center'>
        <p>Gym Hours: 5:00AM-9:00PM</p>
        <p>Today: {date}</p>
        <h1 className='text-6xl p-1 '>Tuesday</h1>
        <h2 className='text-2xl p-3 '>Chest</h2>
      </div>
      <div className='grid grid-cols-3 gap-4 place-items-center mb-10'>
        <Link to='/tuesday/incline-bench' className='' id="incline-bench">
          <img src={InclineBenchImg} className='img rounded' alt='img'></img>
        </Link>
        <Link to='/tuesday/decline-bench' className='' id="decline-bench">
          <img src={DeclineBenchImg} className='img rounded' alt='img'></img>
        </Link>
        <Link to='/tuesday/dumbbell-chest-fly' className='' id="dumbbell-chest-fly">
          <img src={DumbbellChestFlyImg} className='img rounded' alt='img'></img>
        </Link>
        <Link to='/tuesday/cable-fly' className='' id="cable-fly">
          <img src={CableFlyImg} className='img rounded' alt='img'></img>
        </Link>
        <Link to='/tuesday/dumbbell-chest-press' className='' id="dumbbell-chest-press">
          <img src={DumbbellChestPressImg} className='img rounded' alt='img'></img>
        </Link>
        <Link to='/tuesday/machine-chest-press' className='' id="machine-chest-press">
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