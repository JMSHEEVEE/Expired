import * as React from "react";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "../scss/styles.scss";

const GuestPage = () => {
  const [usernameInput, setUsernameInput] = React.useState('');
  const [passwordInput, setPasswordInput] = React.useState('');

  const handleUser

  return (
    <div>
      <div>
        <img src="https://hmp.me/dym2"></img>
      </div>
      <div className="username-field-div">
        <TextField
          id="filled-basic"
          label="username"
          variant="filled"
        />
      </div>
      <div className="password-field-div">
        <TextField
          id="filled-basic"
          label="password"
          variant="filled"
        />
      </div>
      <div className="login-button-div">
        <Button
          variant="contained"
          sx={{
            backgroundColor:"rgb(82, 139, 166)",
            color:"black",
            width:"200px",
            fontWeight:"bold",
            "&:hover": {
              backgroundColor: "rgb(41, 46, 49)",
              color: "white"
            }}}
        >
          LOGIN
        </Button>
      </div>
      <div className="signup-button-div">
        <Button
          variant="contained"
          sx={{
            backgroundColor:"rgb(82, 139, 166)",
            color:"black",
            width:"200px",
            fontWeight:"bold",
            "&:hover": {
              backgroundColor: "rgb(41, 46, 49)",
              color: "white"
            }}}
        >
          SIGN UP
        </Button>
      </div>
    </div>
  )
}

export default GuestPage;