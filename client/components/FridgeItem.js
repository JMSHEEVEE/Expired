import * as React from 'react';
import { Fragment } from 'react';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import "../scss/styles.scss";

export default function FridgeItem() {
  
  const handleDelete = (e) => {
    (async () => {
        try {
        await fetch('/api/', {
            method: 'DELETE',
            body: JSON.stringify({ resto_id }),
            headers: {
            'Content-Type': 'application/json',
            },
        });
        //THIS IS A STAND IN VARIABLE
        setDeleted({ item_id });
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
        justifyContent="flex-end"
        alignItems="flex-end"
        >
            <div>
                <h3 padding={4}>Grapes</h3>
                <h4>Expires</h4>
            </div>
            <Button
            id="delete-button"
            onClick={() => {
                alert('clicked');}}
            >
                x
            </Button>
      </Paper>
    </Fragment>
  );
}