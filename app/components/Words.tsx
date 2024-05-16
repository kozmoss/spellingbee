import React from 'react';
import Input from './Input';

interface Props {
  evaluateWord: (word: string) => void;
  answersShown: string;
  grayForm: string;
  userPangrams: string[];
  userAnswers: string[];
  validPangrams: string[];
  isCorrect:any
}

const Words: React.FC<Props> = ({ evaluateWord, answersShown, grayForm, userPangrams, userAnswers, isCorrect }) => {
  const submitResponse = () => {
    if (isCorrect === "yes") {
      return "Valid word!";
    } else if (isCorrect === undefined ) {
      return " ";
    } else if (isCorrect === "pangram") {
      return "Pangram!";
    } else {
      return "Not a valid word";
    }
  };

  return (
    <div className='card col-span-1 bg-base-100 shadow-xl w-full'>
      <Input
        answersShown={answersShown}
        evaluateWord={evaluateWord}
        grayForm={grayForm}
      />
      <p>{submitResponse()}&nbsp;</p>

      <p className="componentname">Words</p>
      <div className='divider'>Your pangrams</div>
      <ul>
        {userPangrams.map((item, i) => (
          <li key={i}>
            {item} <small>{item.length} + 10</small>
          </li>
        ))}
      </ul>
      <div className='divider'>Your answers</div>
      <ul>
        {userAnswers.map((item, i) => (
          <li key={i}>
            {item} <small>{item.length}</small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Words;