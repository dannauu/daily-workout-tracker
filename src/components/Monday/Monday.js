import React, { useState, useEffect } from 'react'

const Monday = () => {
  const [notDone, setNotDone] = useState(false);
  const [pTag, setPTag] = useState(0);

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
    setNotDone(true)
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

  return (
    <div className='text-white'>
      <h1 className='text-center text-6xl p-2 bg-white text-black'>Monday</h1>
      <h2 className='text-center text-2xl p-3 text-green-600'>Back</h2>
      <div className='text-center'>
        <div className='bg-white text-black'>
          <p id='one' className='p-4' onClick={handleClick} >Walk half mile/Jog half mile x1</p>
        </div>
        <div className='bg-black text-white'>
          <p id='two' className='p-4' onClick={handleClick}>Lat Pulldowns ----- 3 x 10</p>
        </div>
        <div className='bg-white text-black'>
          <p id='three' className='p-4' onClick={handleClick}>Dumbbell Row ----- 3 x 10</p>
        </div>
        <div className='bg-black text-white'>
          <p id='four' className='p-4' onClick={handleClick}>Machine Rows ----- 3 x 10</p>
        </div>
        <div className='bg-white text-black'>
          <p id='five' className='p-4' onClick={handleClick}>Seated Rows ----- 3 x 10</p>
        </div>
        <div className='bg-black text-white'>
          <p id='six' className='p-4' onClick={handleClick}>Reverse Crunches ----- 2 x 10</p>
        </div>
        <div className='bg-white text-black'>
          <p id='seven' className='p-4' onClick={handleClick}>Deadlift ----- 3 x 10</p>
        </div>
        <div className='bg-black text-white'>
          <p id='eight' className='p-4' onClick={handleClick}>Pullups ----- x5</p>
        </div>
        <div className='bg-white text-black'>
          <p id='nine' className='p-4' onClick={handleClick}>Pushups ----- x20</p>
        </div>
      </div>
    </div>
  )
}

export default Monday