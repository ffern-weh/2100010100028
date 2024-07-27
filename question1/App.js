import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [numbers, setNumbers] = useState([]);
  const [windowSize, setWindowSize] = useState(10);
  const [numberType, setNumberType] = useState('e'); // Default to even numbers
  const [average, setAverage] = useState(0);

  useEffect(() => {
    fetchNumbers();
  }, [numberType]);

  const fetchNumbers = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/numbers/${numberType}`);
      const newNumbers = response.data.numbers;
      const allNumbers = newNumbers.slice(-windowSize);
      setNumbers(allNumbers);
      calculateAverage(allNumbers);
    } catch (error) {
      console.error('Error fetching numbers:', error);
    }
  };

  const calculateAverage = (nums) => {
    if (nums.length === 0) return;
    const sum = nums.reduce((acc, num) => acc + num, 0);
    const avg = sum / nums.length;
    setAverage(avg.toFixed(2));
  };

  return (
    <div>
      <h1>Average Calculator</h1>
      <select value={numberType} onChange={(e) => setNumberType(e.target.value)}>
        <option value="e">Even</option>
        <option value="p">Prime</option>
        <option value="f">Fibonacci</option>
        <option value="r">Random</option>
      </select>
      <button onClick={fetchNumbers}>Fetch Numbers</button>
      <div>
        <h2>Numbers:</h2>
        <p>{numbers.join(', ')}</p>
        <h2>Average:</h2>
        <p>{average}</p>
      </div>
    </div>
  );
};

export default App;
