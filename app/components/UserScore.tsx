"use client"
import React from 'react';

function UserScore({userScore,userWordCount, validPangrams, getValidScores, validAnswers, validWordCount}:any) {
  return (
    <div className='m-5'>
    <div className="stats stats-vertical sm:stats-horizontal shadow">

       <div className="stat">
    <div className="stat-title">Score</div>
    <div className="stat-value">{userScore}</div>
    <div className="stat-desc">(high score: {Math.round(getValidScores(validAnswers, validPangrams) / 4)} points)</div>
  </div>
  <div className="stat">
    <div className="stat-title">Words</div>
    <div className="stat-value"> {userWordCount}</div>
    <div className="stat-desc">(out of a possible {validWordCount} words)</div>
  </div>
    </div>
    </div>

  );
}

export default UserScore;