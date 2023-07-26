import React from 'react';
import { ListItem, ListItemText } from '@material-ui/core';

const TrainItem = ({ train }) => {
  return (
    <ListItem>
      <ListItemText primary={train.name} secondary={`Departure: ${train.departure}`} />
    </ListItem>
  );
};

export default TrainItem;
