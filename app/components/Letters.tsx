
import React from 'react';

function Letters({validLetters, newSet, shuffleTheLetters}: {validLetters: any, newSet:any, shuffleTheLetters:any}) {
  return (
    <div className="card bg-base-100 shadow-xl col-span-1 w-full" id="letterscomponent">
      <p className="componentname">Letters</p>
      <div id="letterscontainer">
        {validLetters.map((item:any, i:number) => (
          <div key={i} className="letter" id={"letter" + i}>{item}</div>
        ))}
      </div>
      <p><small><em>Letters can be used more than once<br />Singular nouns &amp; present tense verbs only</em></small></p>
      <div className='w-full flex flex-row justify-center gap-5 m-5 '>
        <button className='btn btn-outline' id="shuffle"  onClick={shuffleTheLetters}>Shuffle</button>
        <br />
        <button className='btn btn-outline' id="newset" onClick={newSet}>New set</button>
      </div>
    </div>
  );
}

export default Letters;