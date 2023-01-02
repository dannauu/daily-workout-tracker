import React from 'react'

const Sunday = () => {
  function handleClick(event) {
    console.log(event)
    event.target.classList.add('test')
  }
  return (
    <div className='text-white'>
      <h1 className='text-center text-4xl p-2 bg-white text-black'>Sunday</h1>
      <h2 className='text-center text-2xl pt-3'>Biceps and Triceps</h2>
      <div className='text-center'>
        <div className='bg-white text-black'>
          <p className='p-4'  onClick={handleClick}>Walk half mile/Jog half mile x1</p>
        </div>
        <div className='bg-black text-white'>
          <p className='p-4'  onClick={handleClick}>Concentration Curls ----- 3 x 10</p>
        </div>
        <div className='bg-white text-black'>
          <p className='p-4'  onClick={handleClick}>Tricep Dips (Body Weight) ----- 3 x 10</p>
        </div>
        <div className='bg-black text-white'>
          <p className='p-4'  onClick={handleClick}>Preacher Curls ----- 3 x 10</p>
        </div>
        <div className='bg-white text-black'>
          <p className='p-4'  onClick={handleClick}>Dumbbell Overhead Extension ----- 3 x 10</p>
        </div>
        <div className='bg-black text-white'>
          <p className='p-4'  onClick={handleClick}>Hammer Curls ----- 3 x 10</p>
        </div>
        <div className='bg-white text-black'>
          <p className='p-4'  onClick={handleClick}>Rope Tricep Pulldown ----- 3 x 10</p>
        </div>
        <div className='bg-black text-white'>
          <p className='p-4'  onClick={handleClick}>Pullups ----- x7</p>
        </div>
        <div className='bg-white text-black'>
          <p className='p-4'  onClick={handleClick}>Pushups ----- x20</p>
        </div>

      </div>
    </div>
  )
}

export default Sunday