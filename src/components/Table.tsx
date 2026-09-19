import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router";
import WinModal from "./WinModal";
import { playClickSound, playWinSound, playStartSound } from "../utils/audio";

interface Difficulties {
    easy: number,
    normal: number,
    hard: number
}

const difficulties: Difficulties = {
    easy: 3,
    normal: 4,
    hard: 5
}

function Table() {
    const [playing, setPlaying] = useState(true)
    const [showWinModal, setShowWinModal] = useState(false)

    const [totalMoves, setTotalMoves] = useState(0)

    const navigate = useNavigate()

    const { difficulty } = useParams()

    const tableSize = difficulties[difficulty as keyof typeof difficulties]
    useEffect(() => {
        if (!tableSize) navigate("/")
    }, [tableSize, navigate])

    const [table, setTable] = useState(() => {
        // 1. Generate initial grid
        const grid = Array.from({ length: tableSize }, () =>
            Array.from({ length: tableSize }, () => Math.random() < 0.1)
        );

        // Helper to pick random coordinates
        const getRandomCoord = () => Math.floor(Math.random() * tableSize);

        // 2. Flatten grid to check total true/false counts easily
        const flatGrid = grid.flat();
        const hasTrue = flatGrid.includes(true);
        const hasFalse = flatGrid.includes(false);

        // 3. Guarantee at least one true
        if (!hasTrue && tableSize > 0) {
            grid[getRandomCoord()][getRandomCoord()] = true;
        }

        // 4. Guarantee at least one false
        if (!hasFalse && tableSize > 0) {
            grid[getRandomCoord()][getRandomCoord()] = false;
        }

        return grid;
    });

    const handleClick = (x: number, y: number) => {
        if (!playing) return

        playClickSound()

        const updatedTable = table.map((tableRow, rowIndex) => {
            return tableRow.map((tableCell: boolean, cellIndex: number) => {
                // Check if the current cell is the clicked cell OR one of its direct neighbors
                const isSelf = rowIndex === x && cellIndex === y;
                const isUp = rowIndex === x - 1 && cellIndex === y;
                const isDown = rowIndex === x + 1 && cellIndex === y;
                const isLeft = rowIndex === x && cellIndex === y - 1;
                const isRight = rowIndex === x && cellIndex === y + 1;

                if (isSelf || isUp || isDown || isLeft || isRight) {
                    return !tableCell;
                }

                return tableCell;
            });
        });

        setTotalMoves(totalMoves + 1)
        setTable(updatedTable);
    };

    const checkWin = () => {
        let win = true

        table.forEach(tableRow => {
            tableRow.forEach((tableCell: boolean) => {
                if (!tableCell) win = false
            })
        })

        return win
    }

    useEffect(() => {
        if (checkWin()) {
            playWinSound()
            setPlaying(false)
            setShowWinModal(true)
        }
    }, [table])

    useEffect(() => {
        playStartSound()
    }, [])

    return (
        <div
            className="w-full h-screen flex flex-col items-center justify-center p-4 overflow-hidden
                       bg-neutral-100 dark:bg-neutral-900"
        >
            {showWinModal && <WinModal moves={totalMoves} />}

            {!showWinModal && (
                <h1 className="text-3xl sm:text-4xl md:text-5xl mb-4 font-bold shrink-0
                               text-neutral-800 dark:text-neutral-100">
                    Moves: {totalMoves}
                </h1>
            )}

            <div 
                style={{
                    width: 'min(85vw, 65vh)',
                    height: 'min(85vw, 65vh)'
                }}
                className="flex items-center justify-center"
            >
                <div
                    style={{
                        gridTemplateColumns: `repeat(${tableSize}, minmax(0, 1fr))`,
                        gridTemplateRows: `repeat(${tableSize}, minmax(0, 1fr))`
                    }}
                    className="w-full h-full grid gap-2"
                >
                    {table.map((tableRow, rowIndex) =>
                        tableRow.map((tableCell: boolean, cellIndex: number) => (
                            <div
                                onClick={() => handleClick(rowIndex, cellIndex)}
                                key={`${rowIndex}-${cellIndex}`}
                                className={`
                                    w-full h-full duration-200 cursor-pointer rounded-sm
                                    ${tableCell ?
                                        'bg-neutral-800 dark:bg-neutral-200' :
                                        'bg-neutral-300 dark:bg-neutral-600'
                                    }
                                `}
                            />
                        ))
                    )}
                </div>
            </div>
        </div>
    )
}

export default Table