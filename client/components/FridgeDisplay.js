import * as React from "react";
import Box from '@mui/material/Box';
import FridgeItem from './FridgeItem';
import "../scss/styles.scss";

const FridgeDisplay = () => (
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
    </Box>
    </div>
);

export default FridgeDisplay;