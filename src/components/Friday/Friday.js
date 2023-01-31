import React, {useEffect} from 'react'
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

const Friday = () => {
   
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
        <Link to='/curls' className='shadow-md shadow-white'>
          <img src={StandingCurlsImg} className='img rounded' alt='img'></img>
        </Link>
        <Link to='/hammer-curls' className='shadow-md shadow-white'>
          <img src={StandingHamCurlsImg} className='img rounded' alt='img'></img>
        </Link>
        <Link to='/zottman-curls' className='shadow-md shadow-white'>
          <img src={ZottmanCurlsImg} className='img rounded' alt='img'></img>
        </Link>
        <Link to='/rope-pulldown' className='shadow-md shadow-white'>
          <img src={RopePulldownsImg} className='img rounded' alt='img'></img>
        </Link>
        <Link to='/tricep-extension' className='shadow-md shadow-white'>
          <img src={TricepExtensionsImg} className='img rounded' alt='img'></img>
        </Link>
        <Link to='/skull-crusher' className='shadow-md shadow-white'>
          <img src={SkullCrusherImg} className='img rounded' alt='img'></img>
        </Link>
      </div>
      <Routes>
        <Route path="/curls" element={<Curls />} />
        <Route path="/hammer-curls" element={<HammerCurls />} />
        <Route path="/rope-pulldown" element={<RopePullDown />} />
        <Route path="/skull-crusher" element={<SkullCrusher />} />
        <Route path="/zottman-curls" element={<ZottmanCurls />} />
        <Route path="/tricep-extension" element={<TricepExtension />} />
      </Routes>
    </div>
  )
}

export default Friday