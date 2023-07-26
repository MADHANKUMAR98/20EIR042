import React, { useEffect, useState } from 'react';

const PrimeNumbers = () => {
  const [primeNumbers, setPrimeNumbers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://20.244.56.144/numbers/primes')
      .then(response => response.json())
      .then(data => {
        setPrimeNumbers(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Fetch error:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Prime Numbers</h1>
      {loading ? (
        <p>Loading...</p>
      ) : primeNumbers.length === 0 ? (
        <p></p>
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
