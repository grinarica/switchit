import { Link, useNavigate } from "react-router"

interface WinModalProps {
  moves: number
}

function WinModal({ moves = 0 }: WinModalProps) {
  const navigate = useNavigate()

  const handleRestart = () => {
    navigate(0)
  }

  return (
    <div
      className="
        absolute
        z-40
        w-screen 
        h-screen 
        top-0 
        left-0 
        flex
        flex-col
        justify-center 
        items-center 
        backdrop-blur-sm
        select-none
        bg-neutral-100/80
        dark:bg-neutral-800/90
    ">
      <div className="max-w-sm w-11/12 flex flex-col justify-center items-center">
        <h1 className="text-4xl text-center text-neutral-900 dark:text-neutral-100">All switches are on!</h1>
        <h1 className="text-2xl mt-4 text-neutral-900  dark:text-neutral-100">Completed in {moves} moves</h1>
        <button onClick={() => handleRestart()}
          className="w-full mt-10 flex bg-transparent justify-center items-center p-2 cursor-pointer text-3xl transition
            text-neutral-900 hover:bg-neutral-900 hover:text-neutral-100 border-2 border-neutral-900
            dark: dark:text-neutral-100 dark:border-2 dark:border-neutral-100 dark:hover:bg-neutral-100 dark:hover:text-neutral-900
          ">
          Restart
        </button>
        <Link to='/'
          className="w-full mt-4 flex justify-center items-center p-2 cursor-pointer text-3xl transition
            bg-neutral-900 text-neutral-100 hover:bg-neutral-800
            dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-300
          ">
          Home
        </Link>
      </div>
    </div>
  )
}

export default WinModal