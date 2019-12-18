import React from 'react';
import {useDispatch} from 'react-redux';
import TextField from '@material-ui/core/TextField';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
/*
**  function écrire un nom de pokemon
*/
function Name() {
  const dispatch = useDispatch();

  function handleUpdateName(event) {
      dispatch({
          type : "UPDATE_NAME", 
          payload: event.target.value
      })
  }

  return (
    <div>
        <AppBar position="static" style={{backgroundColor : "#38ada9"}}>
        <Toolbar>
          <div className="search">
           <TextField
          id="standard-required"
          label="Search"
        //   defaultValue="Pokemon"
          margin="normal"
          onChange={handleUpdateName}
          placeholder='pokemon'
        />
          </div>
          <Typography className="title" variant="h4">
            My Pokedex - React-Redux-hook 
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}
  export default Name;
