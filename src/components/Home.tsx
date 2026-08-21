import { useState } from "react"
import { Link } from "react-router"

function Home() {
    const [difficulty, setDifficulty] = useState("normal")

    const options = [
        { id: "easy", label: "Easy" },
        { id: "normal", label: "Normal" },
        { id: "hard", label: "Hard" },
    ]

    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center
            bg-gray-100
            dark:bg-neutral-800">
            <div className="max-w-sm w-11/12 h-screen flex flex-col justify-center items-center">
                <h1 className="text-7xl text-gray-950 dark:text-white mb-4">Switch It</h1>

                <div className="flex flex-col w-full gap-2 mb-10 mt-10 text-white">
                    {options.map((opt) => (
                        <label
                            key={opt.id}
                            className={`
                        cursor-pointer px-4 py-3 text-3xl transition-colors border-2 text-center
                        ${difficulty === opt.id
                                    ? "bg-gray-100 text-neutral-900 border-gray-100"
                                    : "bg-neutral-800 text-neutral-300 border-neutral-400 hover:bg-neutral-700"
                                }
                    `}
                        >
                            <input
                                type="radio"
                                name="difficulty"
                                value={opt.id}
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
                    className="text-4xl p-3 text-center border-2 w-full
                             text-gray-100
                             dark:bg-gray-100 dark:text-gray-900">
                    Play
                </Link>
            </div>
        </div>
    )
}

export default Home