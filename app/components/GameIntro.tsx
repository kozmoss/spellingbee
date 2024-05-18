"use client";
import React, { useState } from "react";
import { locales } from "@/config";
import LocaleSwitcherSelect from "./LocaleSwicther";
import { useLocale, useTranslations } from "next-intl";

function GameIntro({ resetGame, score, time }: any) {
  const locale = useLocale();
  const [showLanguageModal, setShowLanguageModal] = useState(true);
  const t = useTranslations("LocaleSwitcher");

  return (
    <div className="flex flex-col items-center justify-center  text-white">
      {(showLanguageModal || time == 0) && (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-50">
          <div className="p-6 rounded z-50">
            <div className="card w-96 bg-base-100 shadow-xl">
              <div className="card-body text-center gap-10">
                <div className="text-center">
                  {score ? (
                   <div>Score:{score}</div> 
                  ) : (
                    <div className="flex flex-col items-start text-left p-4 rounded-md shadow-md max-w-md mx-auto">
                    <h1 className="text-xl font-bold mb-3">{t("title")}</h1>
                    <p className="text-sm mb-2">
                   {  t("introDescription")}
                    </p>
                    <ul className="list-none pl-0 mb-2 text-sm space-y-1">
                      <li>{t("introInitalTime")}</li>
                      <li>{t("introPointSystem")}</li>
                      <li>{t("introTimeBonus")}</li>
                    </ul>
                    <p className="text-sm">{t("introGoodLuck")}</p>
                  </div>
                  )}
                </div>
                <LocaleSwitcherSelect defaultValue={locale} label={t("label")}>
                  {locales.map((cur) => (
                    <option key={cur} value={cur}>
                      {t("locale", { locale: cur })}
                    </option>
                  ))}
                </LocaleSwitcherSelect>

                <button
                  onClick={() => {
                    resetGame();
                    setShowLanguageModal(false);
                  }}
                  className="btn btn-warning bottom-0 flex"
                >
                  Start Game
                </button>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 bg-black opacity-50 z-40"></div>
        </div>
      )}
    </div>
  );
}

export default React.memo(GameIntro);
