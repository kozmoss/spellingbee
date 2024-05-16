import React, { useState } from 'react';

const Input = ({ grayForm, evaluateWord }:any) => {
  const [guess, setGuess] = useState('');

  const handleChange = (event:any) => {
    setGuess(event.target.value);
  };

  const handleSubmit = (event:any) => {
    event.preventDefault();
    evaluateWord(guess);
    setGuess('');
  };

  return (
    <div  id="inputcomponent">
      <p className="componentname">Input</p>

      <form onSubmit={handleSubmit} className={grayForm}>
        <label>
          Guess:
        </label>
        <input 
        className='input input-bordered w-full max-w-xs mr-5 '
          type="text" 
          value={guess}  
          onChange={handleChange}
        />
        &nbsp;
        <input  className='btn btn-warning ' type="submit" value="Submit" id="submitbutton" />
      </form>
    </div>
  );
}

export default Input;