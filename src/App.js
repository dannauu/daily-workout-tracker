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

function App() {
  const day = dayjs().day()
  console.log(day)
  const [currentDay, setCurrentDay] = useState(day)
  return (
    <div className="bg-black min-h-screen googleFont">
      {currentDay === 1 && <Monday/>}
      {currentDay === 2 && <Tuesday/>}
      {currentDay === 3 && <Wednesday/>}
      {currentDay === 4 && <Thursday/>}
      {currentDay === 5 && <Friday/>}
      {currentDay === 6 && <Saturday/>}
      {currentDay === 0 && <Sunday/>}
    </div>
  );
}

export default App;
