import "./Secondcomp.css";

export default function Secondcomp(props) {
    return (
        <div className="h-[65%] w-[100%] flex justify-center items-center">
            <div className="h-[100%] w-[90%] flex justify-center items-center ">
                <div className="h-[80%] w-[40%]  flex justify-around items-center flex-col ">
                    <div>
                        <p className="text-white font-bold text-3xl">YOUR PICKED</p>
                    </div>
                    <div>
                        {
                            props.choix == "Rock" ? 
                            <div className='h-[200px] w-[200px] rounded-full  border-[15px] bg-white border-red-600 right-[35%] top-[1%] flex justify-center items-center shadow-gray-600 shadow-inner'>
                            <img src={props.Rock} alt="" />
                            </div>
                            :
                            ""
                        }
                        {
                            props.choix == "Papper" ? 
                            <div className='h-[200px] w-[200px] rounded-full  border-[15px] bg-white border-blue-700 right-[35%] top-[1%] flex justify-center items-center shadow-gray-600 shadow-inner'>
                            <img src={props.Papper} alt="" />
                            </div>
                            :
                            ""

                        }
                        {
                            props.choix == "Scissors" ? 
                            <div className='h-[200px] w-[200px] rounded-full  border-[15px] bg-white border-yellow-300 right-[35%] top-[1%] flex justify-center items-center shadow-gray-600 shadow-inner'>
                            <img src={props.Scissors} alt="" />
                            </div>
                            :
                            ""

                        }
                    </div>
                </div>

                <div className="w-[20%] h-[99%] flex justify-center i${tems-center flex-col gap-5">
                    <p className="text-5xl text-white">{props.game(props.random, props.choix)} </p>
                    <button onClick={() => (props.setAgain(true), props.point(props.choix))} className="btn bg-white">PLAY AGAIN</button>
                </div>
                <div className="h-[80%] w-[40%] flex justify-around items-center flex-col">
                    <div>
                        <p className="text-white font-bold text-3xl">THE HOUSE PICKED</p>
                    </div>
                    <div>
                        {           
                            props.random == "Rock" ? 
                            <div className='h-[200px] w-[200px] rounded-full  border-[15px] bg-white border-red-600 right-[35%] top-[1%] flex justify-center items-center shadow-gray-600 shadow-inner'>
                            <img src={props.Rock} alt="" />
                            </div>
                            :
                            ""
                        }
                        {           
                            props.random == "Papper" ? 
                            <div className='h-[200px] w-[200px] rounded-full  border-[15px] bg-white border-blue-700 right-[35%] top-[1%] flex justify-center items-center shadow-gray-600 shadow-inner'>
                            <img src={props.Papper} alt="" />
                            </div>
                            :
                            ""
                        }
                        {           
                            props.random == "Scissors" ? 
                            <div className='h-[200px] w-[200px] rounded-full  border-[15px] bg-white border-yellow-300 right-[35%] top-[1%] flex justify-center items-center shadow-gray-600 shadow-inner'>
                            <img src={props.Scissors} alt="" />
                            </div>
                            :
                            ""
                        }
                    </div>
                </div>
                
            </div>
        </div>
    )
}
