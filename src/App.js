import { useRef, useState } from 'react';
import './App.css';
import Firstcomp from './Compoments/Firstcomp/Firstcomp';
import Secondcomp from "./Compoments/Secondcomp/Secondcomp"

import Triangle from "./img/bg-triangle.svg"

import Rock from "./img/icon-rock.svg"
import Papper from "./img/icon-paper.svg"
import Scissors from "./img/icon-scissors.svg"

import Close from "./img/icon-close.svg"

import LogoName from "./img/logo.svg"



function App() {

  const [score, setScore] = useState(0)


  return (
    <div className="App h-screen w-screen bg-blue-950 flex justify-center flex-col">
      <Firstcomp score={score}></Firstcomp>
      <div className='fTriangle'>
        
      </div>
      {/* <Secondcomp Triangle={Triangle} Rock={Rock} Papper={Papper} Scissors={Scissors}></Secondcomp> */}
    </div>
  );
}

export default App;