"use client"
import React, { useState, useEffect } from 'react';
import '../App.css';

import Header from '../components/Headers';
import UserScore from '../components/UserScore';
import Letters from '../components/Letters';
import Words from '../components/Words';
import Answers from '../components/Answers';
import Footer from '../components/Footer';

interface WordSet {
  validLetters: string[];
  validPangram: string[];
  validAnswers: string[];
}

interface State {
  wordSetLength?: number;
  isCorrect?: any;
  answerShow:string;
  grayForm: "show" | "grayed";
  validLetters: string[];
  validPangrams: string[];
  validAnswers: string[];
  validScore: number;
  userGuess: string;
  userPangrams: string[];
  userAnswers: string[];
  userScore: number;
  error: Error | null;
  isLoaded: boolean;
  items: any[]; // You can replace `any[]` with the appropriate type
}

const initialState: State = {
  wordSetLength: undefined,
  isCorrect: undefined,
  answerShow: "hidden",
  grayForm: "show",
  validLetters: [],
  validPangrams: [],
  validAnswers: [],
  validScore: 0,
  userGuess: "",
  userPangrams: [],
  userAnswers: [],
  userScore: 0,
  error: null,
  isLoaded: false,
  items: []
};



function App() {
  const [state, setState] = useState<State>(initialState);



  function shuffleLetters() {
    let theLetters = [...state.validLetters]; // Make a copy to avoid mutating state directly
    for (let i = theLetters.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [theLetters[i], theLetters[j]] = [theLetters[j], theLetters[i]]; // Swap elements
    };
    setState({
      ...state,
      validLetters: theLetters
    });
  }

  function scoreAnswers() {
    let score = 0;
    state.userAnswers.forEach(function(word) {
      score = score + word.length;
    })
    state.userPangrams.forEach(function(word) {
      score = score + 10 + word.length;
    })
    setState({
      ...state,
      userScore: score
    });
  }

  function evaluateWord(word:any) {
    console.log(word + ' submitted');

    let currentList = state.userAnswers;
    let currentPangram = state.userPangrams;

    if (state.userAnswers.includes(word)) {
        console.log("word already guessed")
        setState({ ...state ,isCorrect: "alreadyguessed"
        });
      } else if (state.validPangrams.includes(word)) {
        console.log("pangram!");
        currentPangram.push(word);
        currentPangram.sort();
        setState({...state,
          userPangrams: currentPangram,
          isCorrect: "pangram"
        });
        scoreAnswers();
      } else if (state.validAnswers.includes(word)) {
        console.log("word is accepted");
        currentList.push(word);
        currentList.sort();
        setState({...state,
          userAnswers: currentList,
          isCorrect: "yes"
        });
        scoreAnswers();
      } else {
        console.log("word is rejected");
        setState({...state,
          userPangrams: currentPangram,
          isCorrect: "no"
        });


      }
  }

  function answerToggler() {
    let css = (state.answerShow === "hidden") ? "show" : "hidden";
    showAnswersEndGame();
    setState({
      ...state,
      answerShow: css
    });
  }


  function newSet() {
    import("../data/jumble5_hard.json")
    .then(
      (result: { wordSets: WordSet[] }) => {
        const randNum = Math.floor(Math.random() * (result.wordSets.length - 1));
        setState({
          ...state,
          isLoaded: true,
          validLetters: result.wordSets[randNum].validLetters,
          validPangrams: result.wordSets[randNum].validPangram,
          validAnswers: result.wordSets[randNum].validAnswers,
          wordSetLength: result.wordSets.length,
        });
      },
      (error) => {
        setState({
          ...state,
          isLoaded: true,
          error
        });
      }
    )
  }

  function showAnswersEndGame() {
    setState({
      ...state,
      grayForm: "grayed"
    });
  }


  useEffect(() => {
    import("../data/jumble5_hard.json")
      .then(
        (result: { wordSets: WordSet[] }) => {
          const randNum = Math.floor(Math.random() * (result.wordSets.length - 1));
          setState({
            ...state,
            isLoaded: true,
            validLetters: result.wordSets[randNum].validLetters,
            validPangrams: result.wordSets[randNum].validPangram,
            validAnswers: result.wordSets[randNum].validAnswers,
            wordSetLength: result.wordSets.length,
          });
        },
        (error) => {
          setState({
            ...state,
            isLoaded: true,
            error
          });
        }
      )
  }, []);

  function getValidScores(answers: string[], pangrams: string[]) {
    let score = 0;
    answers.forEach(function(word) {
      score = score + word.length;
    })
    pangrams.forEach(function(word) {
      score = score + 10 + word.length;
    })
    return score;
  }

  return (
    <div className="App h-screen bg-base-300">
       <Header />
      <div className='container mx-auto h-full'>
     
      <UserScore
        userScore={state.userScore}
        userWordCount={state.userAnswers.length + state.userPangrams.length}
        validAnswers={state.validAnswers}
        validPangrams={state.validPangrams}
        validWordCount={state.validAnswers.length + state.validPangrams.length}
        getValidScores={getValidScores}
        highScore={state.highScore}
      />

      <div className='grid grid-cols-2 gap-5'>
      <Letters
        shuffleTheLetters={shuffleLetters}
        validLetters={state.validLetters}
        newSet={newSet}
      />
      <Words
        evaluateWord={evaluateWord}
        validPangrams={state.validPangrams}
        isCorrect={state.isCorrect}
        userAnswers={state.userAnswers}
        answersShown={state.answerShow}
        grayForm={state.grayForm}
        userPangrams={state.userPangrams}
      />
      </div>
      <div className=''>
 
      <Answers
        validPangrams={state.validPangrams}
        validAnswers={state.validAnswers}
        answerShow={state.answerShow}
        answerToggler={answerToggler}
        showAnswersEndGame={showAnswersEndGame}
      />
      </div>
    
    
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
