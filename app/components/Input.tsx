import React, { useState } from 'react';
import { useTranslations } from 'next-intl';

const Input = ({ grayForm, evaluateWord }:{grayForm:string, evaluateWord: Function}) => {
  const [guess, setGuess] = useState('');
  const t = useTranslations("Button")
  const handleChange = (event:any) => {
    setGuess(event.target.value);
  };

  const handleSubmit = (event:any) => {
    event.preventDefault();
    evaluateWord(guess);
    setGuess('');
  };

  return (
    <div  id="inputcomponent" className='mt-10'>
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
        <input  className='btn btn-warning sm:mt-5  md:mt-5' type="submit" value={t("submit")} id="submitbutton" />
      </form>
    </div>
  );
}

export default React.memo(Input)