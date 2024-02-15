import "./Firstcomp.css";

export default function Firstcomp(props) {
    return (
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
                        <p className="text-6xl font-bold">{props.score}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
