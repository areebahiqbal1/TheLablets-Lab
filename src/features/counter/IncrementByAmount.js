import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {incrementByAmount} from './counterSlice';
import TextField from '@mui/material/TextField';

export default function IncrementByAmount() {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  const [increase, setIncrease] = React.useState(0);

  const handleTextChange = (event) => {
    setIncrease(event.target.value);
  };

  return (
    <div>
      <div>
        <TextField id="texty" label="Increment by:" variant="outlined" onChange={handleTextChange}/>
        <button
          aria-label="Increment value by amount"
          onClick={() => dispatch(incrementByAmount(increase))}
        >
          Increment By Amount
        </button>
        <span>{count}</span>
      </div>
    </div>
  );
}
