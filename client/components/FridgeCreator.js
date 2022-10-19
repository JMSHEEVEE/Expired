import * as React from 'react';
import "../scss/styles.scss";
import dayjs from 'dayjs';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';


const FridgeCreator = () => {

  const [value, setValue] = React.useState(dayjs());

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <div className='item-creator-div'>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="food-entry-text" label="Enter food item" variant="outlined" />
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DesktopDatePicker
          id="exp-date-picker"
          label="Enter expiration date"
          inputFormat="MM/DD/YYYY"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
    </LocalizationProvider>
    <Button
        variant="contained"
        sx={{
          backgroundColor:"rgb(82, 139, 166)",
          color:"black",
          width:"150px",
          fontWeight:"bold",
          "&:hover": {
            backgroundColor: "rgb(41, 46, 49)",
            color: "white"
          }}}
      >
        ADD ITEM
      </Button>
    </Box>
    </div>
  );
}

export default FridgeCreator;
