import React, { useEffect, useState } from 'react';

const Numbers = () => {
  const [numbers, setnumbers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://20.244.56.144/numbers/primes')
      .then(response => response.json())
      .then(data => {
        setnumbers(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Fetch error:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Numbers</h1>
      {loading ? (
        <p>Loading...</p>
      ) : numbers.length === 0 ? (
        <p></p>
      ) : (
        <ul>
          {numbers.map((number, index) => (
            <li key={index}>{number}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Numbers;
