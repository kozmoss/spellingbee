"use client"
import React from 'react';
import { useTranslations } from 'next-intl';

interface UserScoreProps {
  userScore: number;
  userWordCount: number;
  time: number;
}

function UserScore({userScore,userWordCount,time}:UserScoreProps) {
  const t = useTranslations("ScoreTable")
  return (
    <div className='m-5'>
    <div className="stats stats-vertical sm:stats-horizontal shadow">
    <div className="stat w-48">
    <div className="stat-title">{t("time")}</div>
    <div className="stat-value">{time}</div>
  </div>
       <div className="stat w-48">
    <div className="stat-title">{t("score")}</div>
    <div className="stat-value">{userScore}</div>
    <div className="stat-desc"></div>
  </div>
  <div className="stat w-48">
    <div className="stat-title">{t("words")}</div>
    <div className="stat-value"> {userWordCount}</div>
    <div className="stat-desc"></div>
  </div>
    </div>
    </div>

  );
}

export default React.memo(UserScore)