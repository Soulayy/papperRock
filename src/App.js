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
  
  let getRandomInt = (max) =>{
    return Math.floor(Math.random() * max);
  }
  
  const [randomise, setRandomise] = useState(["Rock", "Papper", "Scissors"])
  

  const [random, setRandom] = useState("")

  let randomchoice = () => {
    setRandom(
      randomise[getRandomInt(3)]
    )
  }


  let game = (choix, random) =>{
    if (choix == random) {
      return "DRAW"
    }else if (random == "Papper" ) {
        if (choix == "Scissors") {
            return "LOSE"
        }else{
          return "WIN"
        }
    }else if (random == "Rock") {
        if (choix == "Papper") {
            return "LOSE"
        }else{
            return "WIN"
        }
    }else if (random == "Scissors") {
        if (choix == "Rock") {
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
                    <p className="text-white text-5xl font-semibold">Papper</p>
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
          again ? <Firstcomp randomchoice={randomchoice} setAgain={setAgain} setChoix={setChoix} Rock={Rock} Papper={Papper} Scissors={Scissors} score={score} setScore={setScore} game={game}></Firstcomp> : <Secondcomp game={game} setAgain={setAgain} setChoix={setChoix} Rock={Rock} Papper={Papper} Scissors={Scissors} choix={choix} random={random} setRandom={setRandom} score={score} setScore={setScore}></Secondcomp>
        }
      
    </div>

  );
}

export default App;