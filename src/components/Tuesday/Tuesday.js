import React from 'react'

const Tuesday = () => {
  function handleClick(event) {
    event.target.classList.add('crossout')
  }
  return (
    <div className='text-white'>
      <h1 className='text-center text-6xl p-2 bg-white text-black'>Sunday</h1>
      <h2 className='text-center text-2xl p-3 text-green-600'>Biceps and Triceps</h2>
      <div className='text-center'>
        <div className='bg-white text-black'>
          <p className='p-4' onClick={handleClick}>Walk half mile/Jog half mile x1</p>
        </div>
        <div className='bg-black text-white'>
          <p className='p-4' onClick={handleClick}>Concentration Curls ----- 3 x 10</p>
        </div>
        <div className='bg-white text-black'>
          <p className='p-4' onClick={handleClick}>Tricep Dips (Body Weight) ----- 3 x 10</p>
        </div>
        <div className='bg-black text-white'>
          <p className='p-4' onClick={handleClick}>Preacher Curls ----- 3 x 10</p>
        </div>
        <div className='bg-white text-black'>
          <p className='p-4' onClick={handleClick}>Dumbbell Overhead Extension ----- 3 x 10</p>
        </div>
        <div className='bg-black text-white'>
          <p className='p-4' onClick={handleClick}>Hammer Curls ----- 3 x 10</p>
        </div>
        <div className='bg-white text-black'>
          <p className='p-4' onClick={handleClick}>Rope Tricep Pulldown ----- 3 x 10</p>
        </div>
        <div className='bg-black text-white'>
          <p className='p-4' onClick={handleClick}>Pullups ----- x5</p>
        </div>
        <div className='bg-white text-black'>
          <p className='p-4' onClick={handleClick}>Pushups ----- x20</p>
        </div>
      </div>
    </div>
  )
}

export default Tuesday