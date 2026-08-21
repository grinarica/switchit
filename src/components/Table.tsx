import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router";
import WinModal from "./WinModal";

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

    const [table, setTable] = useState(
        Array.from({ length: tableSize }, () => Array(tableSize).fill(false))
    )

    const handleClick = (x: number, y: number) => {
        if (!playing) return

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
            setPlaying(false)
            setShowWinModal(true)
        }
    }, [table])

    return (
        <div
            className="w-screen h-screen bg-neutral-800 flex flex-col items-center justify-center p-2.5">

            {showWinModal && <WinModal difficulty={difficulty as "easy" | "normal" | "hard"} moves={totalMoves} />}

            {!showWinModal && <h1 className="text-5xl mb-5 text-white">Moves: {totalMoves}</h1>}

            <div style={{ gridTemplateColumns: `repeat(${tableSize}, minmax(0, 1fr))` }} className={`w-full max-w-3xl aspect-square grid gap-2`}>
                {table.map((tableRow, rowIndex) => {
                    return (
                        tableRow.map((tableCell: boolean, cellIndex: number) => {
                            return (
                                <div
                                    onClick={() => handleClick(rowIndex, cellIndex)}
                                    key={`${rowIndex}-${cellIndex}`}
                                    className={`
                                    cell
                                    w-full
                                    duration-200
                                    ${tableCell ? 'bg-neutral-200' : 'bg-neutral-600'}
                                `}>

                                </div>
                            )
                        }
                        )
                    )
                })}
            </div>
        </div>
    )
}

export default Table