import "./Firstcomp.css";

export default function Firstcomp(props) {
    return (
        <div className='fTriangle h-[65%] w-[100%] flex justify-center items-center'>
        <div className='h-[85%] w-[90%] flex justify-center items-center relative '>

          <div className='h-[140px] w-[140px] rounded-full border-[15px] bg-white border-red-600 absolute bottom-[10%] flex justify-center items-center shadow-gray-600 shadow-inner'>
            <img onClick={() => props.setChoix("Rock")} src={props.Rock} alt="" srcset="" />
          </div>

          <div className='h-[140px] w-[140px] rounded-full border-[15px] bg-white border-blue-700 absolute left-[35%] top-[1%] flex justify-center items-center shadow-gray-600 shadow-inner'>
            <img onClick={() => props.setChoix("Papper")} src={props.Papper} alt="" srcset="" />
          </div>

          <div className='h-[140px] w-[140px] rounded-full  border-[15px] bg-white border-yellow-300 absolute right-[35%] top-[1%] flex justify-center items-center shadow-gray-600 shadow-inner'>
            <img onClick={() => props.setChoix("Scissors")} src={props.Scissors} alt="" srcset="" />
          </div>

        </div>
      </div>
    )
}
