import { useRef, useState } from 'react';
import './App.css';
import Firstcomp from './Compoments/Firstcomp/Firstcomp';
import Secondcomp from "./Compoments/Secondcomp/Secondcomp"
import Treecamp from './Compoments/Treecamp/Treecamp';

import Triangle from "./img/bg-triangle.svg"

import Rock from "./img/icon-rock.svg"
import Papper from "./img/icon-paper.svg"
import Scissors from "./img/icon-scissors.svg"

import Close from "./img/icon-close.svg"

import LogoName from "./img/logo.svg"


function App() {

  const [score, setScore] = useState(0)

  const [choix, setChoix] = useState("")

  const [again, setAgain] = useState(true)
  
  let randomise = ["Rock", "Papper", "Scissors"]
  
  let brain = Math.floor(Math.random(randomise) * 3)
  let newRandom = randomise[brain]
  
  const [random, setRandom] = useState(newRandom)


  let game = (random,choix) =>{
    if (choix == random) {
      return "DRAW"
    }else if (random == Paper ) {
        if (choix == Scissors) {
            return "LOSE"
        }else{
          return "WIN"
        }
    }else if (random == Rock) {
        if (choix == Paper) {
            return "LOSE"
        }else{
            return "WIN"
        }
    }else if (random == Scissors) {
        if (choix == Rock) {
            return "LOSE"
        }else{
            return "WIN"
        }
    }
    }



  return (
    <div className="App h-screen w-screen bg-blue-950 flex justify-center flex-col">
      <div className="h-[35%] w-[100%] flex justify-center items-center">
            <div className="h-[200px] w-[700px]  rounded-xl border-[2px] flex justify-center items-center">
                <div className="h-[90%] w-[45%] flex justify-center items-start flex-col">
                    <p className="text-white text-5xl font-semibold">ROCK</p>
                    <p className="text-white text-5xl font-semibold">PAPER</p>
                    <p className="text-white text-5xl font-semibold">SCISSORS</p>
                </div>
                <div className="h-[80%] w-[45%] flex justify-center items-end flex-col">
                    <div className="h-[90%] w-[50%] bg-white text-gray-600 rounded-xl flex justify-center items-center flex-col">
                        <p className="text-2xl font-semibold">SCORE</p>
                        <p className="text-6xl font-bold">{score}</p>
                    </div>
                </div>
            </div>
        </div>

        {
          again ? <Firstcomp setAgain={setAgain} setChoix={setChoix} Rock={Rock} Papper={Papper} Scissors={Scissors} score={score} setScore={setScore}></Firstcomp> : <Secondcomp setAgain={setAgain} setChoix={setChoix} Rock={Rock} Papper={Papper} Scissors={Scissors} choix={choix} newRandom={newRandom} random={random} setRandom={setRandom} score={score} setScore={setScore}></Secondcomp>
        }
      
    </div>

  );
}

export default App;