import * as React from 'react';
import { useState, useEffect } from 'react';
import FridgeDisplay from "./FridgeDisplay";
import FridgeItem from './FridgeItem';
import "../scss/styles.scss";
import dayjs from 'dayjs';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';


const FridgeCreator = () => {

  const [value, setValue] = useState(dayjs());
  const [foodItem, setFoodItem] = useState('');
  const [expDate, setExpDate] = useState('');
  const [itemList, setItemList] = useState(0);

  const handleChange = (newValue) => {
    setValue(newValue);
    const inputDate = new Date(Date.parse(newValue));
    const expDateString = inputDate.toDateString().slice(4);
    console.log('newValue: ', expDateString);
    setExpDate(expDateString);
  };

  const handleTextChange = (e) => {
    setFoodItem(e.target.value);
  }

  const handleAddItem = () => {
    const body = JSON.stringify({
      userID: 1,
      foodItem: foodItem,
      expDate: expDate
    });
    console.log('POST fetch');
    fetch('/api/fridge', {
      method: 'POST',
      body: body,
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(data => {
      setItemList(++itemList);
    }).catch(error => {
      console.log(error);
      console.log(`Error attempting to add ${foodItem}, error`);
    });
  };

  const fridgeArr = [];
  useEffect(() => {
    fetch('/api/fridge')
      .then(data => data.json())
      .then(data => {
        for (let i; i < data.length; i++) {
          fridgeArr.push(<FridgeItem
            key={i}
            userID={data[i].user_id}
            foodItem={data[i].food}
            expDate={data[i].date}
          />)
        }
      })
  }, [itemList])

  return (
    <div>
      <div className='item-creator-div'>
        <Box
          component="form"
          sx={{
            'display': 'flex',
            'align-items': 'center',
            'justify-content': 'center',
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField onChange={handleTextChange} id="food-entry-text" label="Food item" variant="outlined" />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
              id="exp-date-picker"
              label="Expiration date"
              inputFormat="MM/DD/YYYY"
              value={value}
              onChange={handleChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          <Button onClick={handleAddItem}
            variant="contained"
            sx={{
              backgroundColor: "rgb(82, 139, 166)",
              color: "black",
              width: "150px",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: "rgb(41, 46, 49)",
                color: "white"
              }
            }}
          >
            ADD ITEM
          </Button>
        </Box>
      </div>
      <div>
        <FridgeDisplay
          itemArray={fridgeArr}
        />
      </div>
    </div>

  );
}

export default FridgeCreator;