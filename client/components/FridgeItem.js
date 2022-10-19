import * as React from 'react';
import { Fragment } from 'react';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import "../scss/styles.scss";

export default function FridgeItem(props) {
  const { userID, foodItem, expDate, } = props;
  const handleDelete = (e) => {
    (async () => {
      try {
        await fetch('/api/fridge', {
          method: 'DELETE',
          body: JSON.stringify({ item_id }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
        //THIS IS A STAND IN VARIABLE
        console.log(`Deleted ${foodItem}`);
      } catch (error) {
        //THIS IS A STAND IN VARIABLE
        console.log(`Error attempting to delete ${foodItem}, error`);
      }
    })();
  };


  return (
    <Fragment>
      <Paper
        m={1}
        elevation={3}
        display="flex"
        justifycontent="flex-end"
        alignitems="flex-end"
      >
        <h3>{food}</h3>
        <h3>{date}</h3>

        <Button
          id="delete-button"
          onClick={() => { handleDelete }}
          sx={{
            backgroundColor: "rgb(82, 139, 166)",
            color: "black",
            fontWeight: "bold",
            "&:hover": {
              backgroundColor: "rgb(41, 46, 49)",
              color: "white"
            }
          }}
        >
          <DeleteOutlineIcon />
        </Button>
      </Paper>
    </Fragment>
  );
}