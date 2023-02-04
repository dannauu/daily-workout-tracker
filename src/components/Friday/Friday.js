import React, { useEffect, useState } from 'react'
import StandingCurlsImg from '../assets/img/arms/standingCurls.png'
import StandingHamCurlsImg from '../assets/img/arms/standingHamCurls.png'
import ZottmanCurlsImg from '../assets/img/arms/zottmanCurls.png'
import RopePulldownsImg from '../assets/img/arms/ropePullDowns.png'
import TricepExtensionsImg from '../assets/img/arms/tricepExtensions.png'
import SkullCrusherImg from '../assets/img/arms/skullCrusher.png'
import Curls from './Curls'
import HammerCurls from './HammerCurls'
import RopePullDown from './RopePullDown'
import SkullCrusher from './SkullCrusher'
import ZottmanCurls from './ZottmanCurls'
import TricepExtension from './TricepExtension'
import dayjs from 'dayjs';
import { Route, Routes, Link } from "react-router-dom"
import RandomQuote from "../RandomQuote/RandomQuote";

const Friday = () => {
  const date = dayjs().format('MMM D, YYYY')
  const [data, setData] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem('done');
    if (storedData) {
      setData(JSON.parse(storedData));

      if (storedData.includes('curls')) {
        document.getElementById('curls').classList.add('crossout-container')
      }
      if (storedData.includes('hammer-curls')) {
        document.getElementById('hammer-curls').classList.add('crossout-container')
      }
      if (storedData.includes('rope-pulldowns')) {
        document.getElementById('rope-pulldowns').classList.add('crossout-container')
      }
      if (storedData.includes('zottman-curls')) {
        document.getElementById('zottman-curls').classList.add('crossout-container')
      }
      if (storedData.includes('tricep-extension')) {
        document.getElementById('tricep-extension').classList.add('crossout-container')
      }
      if (storedData.includes('skull-crusher')) {
        document.getElementById('skull-crusher').classList.add('crossout-container')
      }
    }
  }, []);

  const refreshLocalStorage = () => {
    localStorage.removeItem('done')
  }


  return (
    <div className='text-white min-h-screen'>
      <div>
        <p className='text-center'>Gym Hours: 5:00AM-7:00PM</p>
        <p className='text-center'>Today: {date}</p>
        <h1 className='text-center text-6xl p-1 bg-white text-black'>Friday</h1>
        <h2 className='text-center text-2xl p-3 text-green-600'>Bicep/Tricep</h2>

      </div>
      <div className='grid grid-cols-3 gap-4 place-items-center mb-10'>
        <Link to='/curls' className='shadow-md shadow-white' id='curls'>
          <img src={StandingCurlsImg} className='img' alt='Standing-Curls-img'></img>
        </Link>
        <Link to='/hammer-curls' className='shadow-md shadow-white' id='hammer-curls'>
          <img src={StandingHamCurlsImg} className='img rounded' alt='Standing-Hammer-Curls-img'></img>
        </Link>
        <Link to='/zottman-curls' className='shadow-md shadow-white' id='zottman-curls'>
          <img src={ZottmanCurlsImg} className='img rounded' alt='Zottman-Curls-img'></img>
        </Link>
        <Link to='/rope-pulldown' className='shadow-md shadow-white' id='rope-pulldowns'>
          <img src={RopePulldownsImg} className='img rounded' alt='Rope-Pulldowns-img'></img>
        </Link>
        <Link to='/tricep-extension' className='shadow-md shadow-white' id='tricep-extension'>
          <img src={TricepExtensionsImg} className='img rounded' alt='Tricep-Extensions-img'></img>
        </Link>
        <Link to='/skull-crusher' className='shadow-md shadow-white' id='skull-crusher'>
          <img src={SkullCrusherImg} className='img rounded' alt='Skull-Crusher-img'></img>
        </Link>
      </div>

      <Routes>
        <Route path="/" element={<RandomQuote />} />
        <Route path="/curls" element={<Curls />} />
        <Route path="/hammer-curls" element={<HammerCurls />} />
        <Route path="/rope-pulldown" element={<RopePullDown />} />
        <Route path="/skull-crusher" element={<SkullCrusher />} />
        <Route path="/zottman-curls" element={<ZottmanCurls />} />
        <Route path="/tricep-extension" element={<TricepExtension />} />
      </Routes>
      <button className='flex m-auto bg-red-800 p-2' onClick={refreshLocalStorage}>Refresh</button>

    </div>
  )
}

export default Friday