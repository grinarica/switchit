import { Link } from "react-router"

interface WinModalProps {
  difficulty: "easy" | "normal" | "hard",
  moves: number
}

function WinModal({ difficulty, moves = 0 }: WinModalProps ) {
  return (
    <div 
    className="
        absolute 
        w-screen 
        h-screen 
        top-0 
        left-0 
        flex
        flex-col
        justify-center 
        items-center 
        bg-neutral-800/90
        backdrop-blur-sm
    ">
        <h1 className="text-5xl text-white">Lights are on!</h1>
        <h1 className="text-2xl mt-2 text-neutral-100">Completed in {moves} moves</h1>
        <Link to='/' 
        className="bg-cyan-500 max-w-72 w-full mt-10 flex justify-center items-center h-10 rounded-lg cursor-pointer">
            Home
        </Link>
        <Link to={`/table/${difficulty}`} 
        className="bg-amber-500 max-w-72 w-full mt-4 flex justify-center items-center h-10 rounded-lg cursor-pointer">
            Restart
        </Link>
    </div>
  )
}

export default WinModal