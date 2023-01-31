import React, { useState, useEffect} from 'react'
import axios from 'axios'

const RandomQuote = () => {
    const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("https://api.quotable.io/random");
      setData(result.data);
    };

    fetchData();
  }, []);
  return (
    <div className='text-center text-2xl text-green-500 p-2 font-semibold'>{`"${data.content}`}"</div>
  )
}

export default RandomQuote