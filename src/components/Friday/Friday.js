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
      if (storedData.includes('hammer')) {
        document.getElementById('hammer').classList.add('crossout-container')
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




  return (
    <div className='text-white min-h-screen'>
      <div className='text-center'>
        <p>Gym Hours: 5:00AM-9:00PM</p>
        <p>Today: {date}</p>
        <h1 className='text-6xl p-1 '>Friday</h1>
        <h2 className='text-2xl p-3 '>Bicep and Tricep</h2>
      </div>
      <div className='grid grid-cols-3 gap-4 place-items-center mb-10'>
        <Link to='/friday/curls' className='' id='curls'>
          <img src={StandingCurlsImg} className='img' alt='Standing-Curls-img'></img>
        </Link>
        <Link to='/friday/hammer' className='' id='hammer'>
          <img src={StandingHamCurlsImg} className='img rounded' alt='Standing-Hammer-Curls-img'></img>
        </Link>
        <Link to='/friday/zottman-curls' className='' id='zottman-curls'>
          <img src={ZottmanCurlsImg} className='img rounded' alt='Zottman-Curls-img'></img>
        </Link>
        <Link to='/friday/rope-pulldown' className='' id='rope-pulldowns'>
          <img src={RopePulldownsImg} className='img rounded' alt='Rope-Pulldowns-img'></img>
        </Link>
        <Link to='/friday/tricep-extension' className='' id='tricep-extension'>
          <img src={TricepExtensionsImg} className='img rounded' alt='Tricep-Extensions-img'></img>
        </Link>
        <Link to='/friday/skull-crusher' className='' id='skull-crusher'>
          <img src={SkullCrusherImg} className='img rounded' alt='Skull-Crusher-img'></img>
        </Link>
      </div>

      <Routes>
        <Route path="/" element={<RandomQuote />} />
        <Route path="/curls" element={<Curls />} />
        <Route path="/hammer" element={<HammerCurls />} />
        <Route path="/rope-pulldown" element={<RopePullDown />} />
        <Route path="/skull-crusher" element={<SkullCrusher />} />
        <Route path="/zottman-curls" element={<ZottmanCurls />} />
        <Route path="/tricep-extension" element={<TricepExtension />} />
      </Routes>

    </div>
  )
}

export default Friday