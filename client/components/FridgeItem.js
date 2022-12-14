import * as React from 'react';
import { Fragment } from 'react';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import "../scss/styles.scss";

export default function FridgeItem() {
  
  const handleDelete = (e) => {
    (async () => {
        try {
        await fetch('/fridge', {
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
        console.log(`Error attempting to delete ${ foodItem }, error`);
        }
    })();
    };

  
  return (
    <Fragment>
        <Paper
        m={1}
        elevation={3}
        display="flex"
        justifyContent="flex-end"
        alignItems="flex-end"
        >
            <Button
            id="delete-button"
            onClick={() => {handleDelete}}
            >
                x
            </Button>
      </Paper>
    </Fragment>
  );
}