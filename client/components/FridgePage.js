import * as React from 'react';
import "../scss/styles.scss";
import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';

export default function FridgePage() {
  const [value, setValue] = React.useState(dayjs('2014-08-18T21:11:54'));

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DesktopDatePicker
          label="Enter expiration date"
          inputFormat="MM/DD/YYYY"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
    </LocalizationProvider>
  );
}
// export function MaterialUIPickers() {
//   const [value, setValue] = React.useState(dayjs('2014-08-18T21:11:54'));

//   const handleChange = (newValue) => {
//     setValue(newValue);
//   };
// };

// const FridgePage = () => (
//   <div>    
//     Fridge Page
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//         <DesktopDatePicker
//           label="Date desktop"
//           inputFormat="MM/DD/YYYY"
//           value={value}
//           onChange={handleChange}
//           renderInput={(params) => <TextField {...params} />}
//         />
//     </LocalizationProvider>    
//   </div>
// );

// export default FridgePage;
