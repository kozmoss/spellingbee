"use client"
import React from 'react';

function Answers({answerToggler,answerShow, validPangrams, validAnswers }:any) {
  return (
    <div className="dropdown w-full bg-base-100 mt-5 "  >
      <p className="componentname">Answers</p>
      
      <button onClick={answerToggler} className='m-5 items-center' title="Ends game">Display answers</button>

      <div className={`${answerShow} overflow-y-auto h-60` }>
              <div className='divider mb-0 mt-5'></div>
        <h3 className=''>Pangrams</h3>
        <div className='divider m-0'></div>
        <ul  tabIndex={0} className="text-left grid grid-cols-5 list-none p-5" id="pangramslist">
          {validPangrams.map((item:any, i:number) => (
            <li key={i}><a href={"https://www.merriam-webster.com/dictionary/" + item} target="_blank">{item}</a></li>
          ))}
        </ul>
        <div className='divider m-0'></div>
        <h3 className='bg-base-100 '>All answers</h3>
        <div className='divider m-0'></div>
        <ul  tabIndex={0} className="text-left grid grid-cols-4 list-none p-5">
          {validAnswers.map((item:any, i:number) => (
            <li key={i}><a href={"https://www.merriam-webster.com/dictionary/" + item} target="_blank">{item}</a></li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Answers;