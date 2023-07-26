import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { List } from '@material-ui/core';
import TrainItem from '../components/Trainitem';

const AllTrainsPage = () => {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    axios.get('http://your-api-endpoint/all-trains')
      .then(response => setTrains(response.data))
      .catch(error => console.error('Error fetching trains:', error));
  }, []);

  return (
    <div>
      <h1>All Trains</h1>
      <List>
        {trains.map(train => (
          <TrainItem key={train.id} train={train} />
        ))}
      </List>
    </div>
  );
};

export default AllTrainsPage;
