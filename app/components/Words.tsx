import React from 'react';
import Input from './Input';
import { useTranslations } from 'next-intl';

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
  const t = useTranslations("Index")
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
      <div className='h-full'>
      <Input
        answersShown={answersShown}
        evaluateWord={evaluateWord}
        grayForm={grayForm}
      />
      <p>{submitResponse()}&nbsp;</p>
      <div className=''>
      <div className='divider'>{t("pangramsS")}</div>
      <ul>
        {userPangrams.map((item, i) => (
          <li key={i}>
            {item} <small>{item.length} + 10</small>
          </li>
        ))}
      </ul>
      </div>
      <div>
      <div className='divider'>{t("answers")}</div>
      <ul className='text-left grid grid-cols-4 list-none p-5'>
        {userAnswers.map((item, i) => (
          <li key={i}>
            {item} <small>({item.length})</small>
          </li>
        ))}
      </ul>
      </div>
 
      </div>
    
    </div>
  );
};

export default Words;