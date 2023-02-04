import React, { useState, useEffect } from 'react'
import axios from 'axios'

const RandomQuote = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("https://api.quotable.io/random");
      setData(result.data);
    };

    fetchData();
  }, []);

  const refreshLocalStorage = () => {
    localStorage.removeItem('done')
    window.location.reload()
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("https://api.quotable.io/random");
        setData(response.data.content);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) return <p className='text-red-600 text-center text-3xl'>Loading...</p>;
  if (error) return <p>An error has occurred: {error.message}</p>;

  return (
    <>
    <div className='text-center text-2xl text-green-500 p-2 font-semibold'>{`"${data}`}"</div>
    <button className='flex m-auto bg-red-800 p-2 rounded' onClick={refreshLocalStorage}>Start Workout Over</button>
    </>
    

  )
}

export default RandomQuote