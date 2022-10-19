import * as React from "react";
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import FridgeItem from './FridgeItem';
import "../scss/styles.scss";

export default function FridgeDisplay(props) {

  return (
    <div>
      <Box
        sx={{
          border: 1,
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 1
          },
        }}
      >
        {props.itemArray}
      </Box>
    </div>
  );
}