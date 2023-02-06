import './App.css';
import { React, useState } from 'react'
import dayjs from 'dayjs';
import Monday from './components/Monday/Monday'
import Tuesday from './components/Tuesday/Tuesday'
import Wednesday from './components/Wednesday/Wednesday'
import Thursday from './components/Thursday/Thursday'
import Friday from './components/Friday/Friday'
import Saturday from './components/Saturday/Saturday'
import Sunday from './components/Sunday/Sunday'
import { Route, Routes, Link } from "react-router-dom"
import RandomQuote from './components/RandomQuote/RandomQuote';

function App() {
  const day = dayjs().day()
  const date = dayjs().format('MMM D, YYYY')
  const [currentDay, setCurrentDay] = useState(day)



  return (
    <div className="bg-black h-screen overflow-hidden">
      <div className='font-semibold flex justify-evenly text-sm pt-2'>
        <Link to='/monday' className='bg-green-300 rounded p-1'>Monday</Link>
        <Link to='/tuesday' className='bg-green-300 rounded p-1'>Tuesday</Link>
        <Link to='/wednesday' className='bg-green-300 rounded p-1'>Wednesday</Link>
        <Link to='/thursday' className='bg-green-300 rounded p-1'>Thursday</Link>
        <Link to="/friday" className='bg-green-300 rounded p-1'>Friday</Link>
      </div>
      {/* {currentDay === 1 && <Monday />}
      {currentDay === 2 && <Tuesday />}
      {currentDay === 3 && <Wednesday />}
      {currentDay === 4 && <Thursday />}
      {currentDay === 5 && <Friday />}
      {currentDay === 6 && <Saturday />}
      {currentDay === 0 && <Sunday />} */}
      <Routes>
        <Route
          path="*"
          element={(() => {
            switch (currentDay) {
              case 0:
                return <Sunday />;
              case 1:
                return <Monday />;
              default:
                return <Tuesday />;
            }
          })()}
        />
        <Route path="/monday/*" element={<Monday />} />
        <Route path="/tuesday/*" element={<Tuesday />} />
        <Route path="/wednesday/*" element={<Wednesday />} />
        <Route path="/thursday/*" element={<Thursday />} />
        <Route path="/friday/*" element={<Friday />} />
      </Routes>
    </div>

  );
}

export default App;
