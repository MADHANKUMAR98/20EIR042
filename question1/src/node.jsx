import React, { useEffect, useState } from 'react';

const PrimeNumbers = () => {
  const [primeNumbers, setPrimeNumbers] = useState([]);

  useEffect(() => {
    fetch('http://20.244.56.144/numbers/primes')
      .then(response => response.json())
      .then(data => setPrimeNumbers(data))
      .catch(error => console.error('Fetch error:', error));
  }, []);

  return (
    <div>
      <h1>Prime Numbers</h1>
      {primeNumbers.length === 0 ? (
        <p>Loading...</p> // Placeholder while data is being fetched
      ) : (
        <ul>
          {primeNumbers.map((number, index) => (
            <li key={index}>{number}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PrimeNumbers;
