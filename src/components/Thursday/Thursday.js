import React, {useEffect} from 'react'
import DumbbellShoulderPress from '../assets/img/shoulders/dumbbellShoulderPress.png'
import Shrugs from '../assets/img/shoulders/shrugs.png'
import ReverseFlys from '../assets/img/shoulders/reverseFly.png'
import LateralRaises from '../assets/img/shoulders/lateralRaise.png'
import MachineShoulderPress from '../assets/img/shoulders/machineShoulderPress.png'
import BehindShrugs from '../assets/img/shoulders/behindShrugs.png'

const Thursday = () => {
  useEffect(() => {
    const allKeys = Object.keys(localStorage);
    allKeys.includes('one') ? document.getElementById('one').classList.add('crossout') : console.log('no')
    allKeys.includes('two') ? document.getElementById('two').classList.add('crossout') : console.log('no')
    allKeys.includes('three') ? document.getElementById('three').classList.add('crossout') : console.log('no')
    allKeys.includes('four') ? document.getElementById('four').classList.add('crossout') : console.log('no')
    allKeys.includes('five') ? document.getElementById('five').classList.add('crossout') : console.log('no')
    allKeys.includes('six') ? document.getElementById('six').classList.add('crossout') : console.log('no')
    allKeys.includes('seven') ? document.getElementById('seven').classList.add('crossout') : console.log('no')
    allKeys.includes('eight') ? document.getElementById('eight').classList.add('crossout') : console.log('no')
    allKeys.includes('nine') ? document.getElementById('nine').classList.add('crossout') : console.log('no')
  }, [])


  function handleClick(event) {
    const pTag = event.target.getAttribute('id');
    switch (pTag) {
      case 'one':
        localStorage.setItem("one", 1)
        document.getElementById('one').classList.add('crossout')
        break;
      case 'two':
        localStorage.setItem("two", 2)
        document.getElementById('two').classList.add('crossout')
        break;
      case 'three':
        localStorage.setItem("three", 3)
        document.getElementById('three').classList.add('crossout')
        break;
      case 'four':
        localStorage.setItem("four", 4)
        document.getElementById('four').classList.add('crossout')
        break;
      case 'five':
        localStorage.setItem("five", 5)
        document.getElementById('five').classList.add('crossout')
        break;
      case 'six':
        localStorage.setItem("six", 6)
        document.getElementById('six').classList.add('crossout')
        break;
      case 'seven':
        localStorage.setItem("seven", 7)
        document.getElementById('seven').classList.add('crossout')
        break;
      case 'eight':
        localStorage.setItem("eight", 7)
        document.getElementById('eight').classList.add('crossout')
        break;
      case 'nine':
        localStorage.setItem("nine", 7)
        document.getElementById('nine').classList.add('crossout')
        break;
    }
  }
  
  function reload() {
    localStorage.clear();
    window.location.reload()
  }

  return (
    <div className='text-white'>
      <h1 className='text-center text-6xl p-2 bg-white text-black'>Thursday</h1>
      <h2 className='text-center text-2xl p-3 text-green-600'>Shoulders</h2>
      <div className='text-center'>
        <div className='bg-white text-black'>
          <p id='one' className='p-4' onClick={handleClick} >Walk half mile/Jog half mile x1</p>
        </div>
        <div className='bg-black text-white flex justify-between'>
          <p id='two' className='p-4 text-center' onClick={handleClick}>Shoulder Press ----- 3 x 10</p>
          <img src={DumbbellShoulderPress} className='img'></img>
        </div>
        <div className='bg-white text-black flex justify-between'>
          <p id='three' className='p-4' onClick={handleClick}>Shoulder Shrugs ----- 3 x 10</p>
          <img src={Shrugs} className='img'></img>
        </div>
        <div className='bg-black text-white flex justify-between'>
          <p id='four' className='p-4' onClick={handleClick}>Reverse Flys ----- 3 x 10</p>
          <img src={ReverseFlys} className='img'></img>
        </div>
        <div className='bg-white text-black flex justify-between'>
          <p id='five' className='p-4' onClick={handleClick}>Lateral Raises ----- 3 x 10</p>
          <img src={LateralRaises} className='img'></img>
        </div>
        <div className='bg-black text-white flex justify-between'>
          <p id='six' className='p-4' onClick={handleClick}>Machine Shoulder Press ----- 3 x 10</p>
          <img src={MachineShoulderPress} className='img'></img>
        </div>
        <div className='bg-white text-black flex justify-between'>
          <p id='seven' className='p-4' onClick={handleClick}>Lunges ----- 3 x 10</p>
          <img src={BehindShrugs} className='img'></img>
        </div>
        <div className='bg-black text-white'>
          <p id='eight' className='p-4' onClick={handleClick}>Pullups ----- x5</p>
        </div>
        <div className='bg-white text-black'>
          <p id='nine' className='p-4' onClick={handleClick}>Pushups ----- x30</p>
        </div>
        <div>
          <button onClick={reload}>Reset</button>
        </div>
      </div>
    </div>
  )
}

export default Thursday