import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import TrainDetails from '../components/TrainDetails';

const SingleTrainPage = () => {
  const { trainId } = useParams();
  const [train, setTrain] = useState(null);

  useEffect(() => {
    axios.get(`http://your-api-endpoint/trains/${trainId}`)
      .then(response => setTrain(response.data))
      .catch(error => console.error('Error fetching train details:', error));
  }, [trainId]);

  return (
    <div>
      <h1>Single Train</h1>
      {train ? (
        <div>
          <Typography variant="h5">{train.name}</Typography>
          <TrainDetails train={train} />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SingleTrainPage;
