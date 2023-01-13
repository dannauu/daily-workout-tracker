import React, {useEffect} from 'react'
import BulgarianSquat from '../assets/img/legs/bulgarianSquat.png'
import CalfRaises from '../assets/img/legs/calfRaises.png'
import LegPress from '../assets/img/legs/legPress.png'
import Lunges from '../assets/img/legs/lunges.png'
import Squat from '../assets/img/legs/squat.png'

const Wednesday = () => {
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
      <p className='text-center font-sans'>Gym Hours: 5:00AM-9:00PM</p>
      <h1 className='text-center text-6xl p-2 bg-white text-black'>Wednesday</h1>
      <h2 className='text-center text-2xl p-3 text-green-600'>Legs</h2>
      <div className='text-center'>
        <div className='bg-white text-black'>
          <p id='one' className='p-4' onClick={handleClick} >Walk half mile/Jog half mile x1</p>
        </div>
        <div className='bg-black text-white'>
          <p id='two' className='p-4 text-center' onClick={handleClick}>Wallsit ----- 3 x 30 seconds</p>
        </div>
        <div className='bg-white text-black flex justify-between items-center'>
          <p id='three' className='p-4' onClick={handleClick}>Leg Press ----- 3 x 10</p>
          <img src={LegPress} className='img'></img>
        </div>
        <div className='bg-black text-white flex justify-between items-center'>
          <p id='four' className='p-4' onClick={handleClick}>Squats ----- 3 x 10</p>
          <img src={Squat} className='img'></img>
        </div>
        <div className='bg-white text-black flex justify-between items-center'>
          <p id='five' className='p-4' onClick={handleClick}>Bulgarian Squat ----- 3 x 10</p>
          <img src={BulgarianSquat} className='img'></img>
        </div>
        <div className='bg-black text-white flex justify-between items-center'>
          <p id='six' className='p-4' onClick={handleClick}>Calf Raises ----- 3 x 10</p>
          <img src={CalfRaises} className='img'></img>
        </div>
        <div className='bg-white text-black flex justify-between items-center'>
          <p id='seven' className='p-4' onClick={handleClick}>Lunges ----- 3 x 10</p>
          <img src={Lunges} className='img'></img>
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

export default Wednesday