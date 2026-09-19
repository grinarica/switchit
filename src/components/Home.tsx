import { useState } from "react"
import { Link } from "react-router"
import { playUiClickSound } from "../utils/audio"

function Home() {
    const [difficulty, setDifficulty] = useState("easy")

    const options = [
        { id: "easy", label: "Easy" },
        { id: "normal", label: "Normal" },
        { id: "hard", label: "Hard" },
    ]

    return (
        <div className="h-full w-full flex flex-col justify-center items-center select-none
            bg-gray-100
            dark:bg-neutral-900">
            <div className="max-w-sm w-11/12 flex flex-col justify-center items-center">
                <h1 className="text-7xl text-gray-900 dark:text-white mb-10">Switch It</h1>

                <div className="flex flex-col w-full gap-2 mb-8 text-white">
                    {options.map((opt) => (
                        <label
                            key={opt.id}
                            className={`
                        cursor-pointer px-4 py-3 text-3xl transition-colors border-2 text-center
                        ${difficulty === opt.id
                                    ? "bg-neutral-900 border-neutral-900 dark:bg-gray-100 dark:text-neutral-900 dark:border-gray-100"
                                    : "bg-neutral-100 text-neutral-800 hover:bg-neutral-200 dark:bg-neutral-900 dark:text-neutral-200 dark:border-neutral-200 dark:hover:bg-neutral-800"
                                }
                    `}
                        >
                            <input
                                type="radio"
                                name="difficulty"
                                value={opt.id}
                                onClick={() => playUiClickSound()}
                                checked={difficulty === opt.id}
                                onChange={(e) => setDifficulty(e.target.value)}
                                className="hidden" // Hides the default browser circle
                            />
                            {opt.label}
                        </label>
                    ))}
                </div>

                {/* PLAY BUTTON */}
                <Link to={`/table/${difficulty}`}
                    className="text-4xl p-3 text-center border-2 w-full transition
                             bg-neutral-900 text-gray-100 hover:bg-neutral-800 border-neutral-900
                             dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-neutral-200 dark:border-neutral-100">
                    Play
                </Link>
            </div>
        </div>
    )
}

export default Home