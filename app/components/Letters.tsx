
import React from 'react';
import { useTranslations } from 'next-intl';

interface LettersProps {
  validLetters: string[];
  newSet: () => void;
  shuffleTheLetters: () => void;
  resetGame: () => void;
}

function Letters({validLetters, newSet, shuffleTheLetters, resetGame}: LettersProps) {
  const t = useTranslations("Button")
  return (
    <div className="card bg-base-100 shadow-xl col-span-1 w-full" id="letterscomponent">
      <p className="componentname">Letters</p>
      <div id="letterscontainer" className='align-center justify-center flex w-full'>
        {validLetters.map((item:any, i:number) => (
          <div key={i} className="letter" id={"letter" + i}>{item}</div>
        ))}
      </div>
      <p><small><em>Letters can be used more than once<br />Singular nouns &amp; present tense verbs only</em></small></p>
      <div className='w-full flex flex-col md:flex-row justify-center gap-3 m-5'>
        <button className='btn  btn-outline' id="shuffle" onClick={shuffleTheLetters}>{t("shuffle")}</button>
        <button className='btn  btn-outline' id="newset" onClick={newSet}>{t("newset")}</button>
        <button className='btn  btn-outline'  onClick={resetGame}>{t("reset")}</button>
      </div>
    </div>
  );
}

export default React.memo(Letters)