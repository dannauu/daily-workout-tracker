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
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="bg-black h-screen overflow-hidden">
      <div className='flex justify-center text-white py-2'>
        <select value={selectedOption} onChange={handleChange} className='text-center rounded text-xl bg-black'>
          <option value="/">Change Day</option>
          <option value="/monday">Monday</option>
          <option value="/tuesday">Tuesday</option>
          <option value="/wednesday">Wednesday</option>
          <option value="/thursday">Thursday</option>
          <option value="/friday">Friday</option>
        </select>
        {selectedOption !== '' && <Link className='text-white bg-green-500 px-1 rounded ml-2' to={selectedOption}>Go</Link>}
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
              case 2:
                return <Tuesday />;
              case 3:
                return <Wednesday />;
              case 4:
                return <Thursday />;
              case 5:
                return <Friday />;
              default:
                return <Saturday />;
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
