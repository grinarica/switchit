import { useState } from 'react';
import DarkModeToggle from './DarkModeToggle'
import { useLocation, useNavigate } from 'react-router';

function Navbar() {
    const navigate = useNavigate()
    const location = useLocation()

    const [isMuted, setIsMuted] = useState(() => {
        const savedMuted = localStorage.getItem("muted")

        if (savedMuted === "true") return true
        if (savedMuted === "false") return false

        return false
    })

    const handleMute = () => {
        setIsMuted((prev) => {
            const nextState = !prev;
            localStorage.setItem("muted", String(nextState));
            return nextState;
        });
    };

    const handleHome = () => {
        navigate("/")
    }

    return (
        <nav className='flex justify-between items-center p-2 gap-2'>
            {location.pathname != "/" ?
            <button className='size-13 z-50 flex flex-row justify-center items-center gap-2 text-2xl
                 bg-neutral-800 text-neutral-100
                 dark:bg-neutral-200 cursor-pointer'
                onClick={() => handleHome()}
            >
                <svg className="dark:fill-neutral-800 p-3 size-full fill-neutral-100" viewBox="0 0 16 16">
                    <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z" />
                    <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293z" />
                </svg>
            </button>
            :
            <div></div>
            }

            <div className='flex justify-center items-center gap-2'>
                <button className='size-13 z-50 flex flex-row justify-center items-center gap-2 text-2xl
                 bg-neutral-800 text-neutral-100
                 dark:bg-neutral-200 cursor-pointer'
                    onClick={() => handleMute()}
                >

                    {!isMuted ?
                        <svg className="dark:fill-neutral-800 p-3 size-full fill-neutral-100" viewBox="0 0 16 16">
                            <path d="M11.536 14.01A8.47 8.47 0 0 0 14.026 8a8.47 8.47 0 0 0-2.49-6.01l-.708.707A7.48 7.48 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303z" />
                            <path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.48 5.48 0 0 1 11.025 8a5.48 5.48 0 0 1-1.61 3.89z" />
                            <path d="M8.707 11.182A4.5 4.5 0 0 0 10.025 8a4.5 4.5 0 0 0-1.318-3.182L8 5.525A3.5 3.5 0 0 1 9.025 8 3.5 3.5 0 0 1 8 10.475zM6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06" />
                        </svg>
                        :
                        <svg className="dark:fill-neutral-800 p-3 size-full fill-neutral-100" viewBox="0 0 16 16">
                            <path d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06m7.137 2.096a.5.5 0 0 1 0 .708L12.207 8l1.647 1.646a.5.5 0 0 1-.708.708L11.5 8.707l-1.646 1.647a.5.5 0 0 1-.708-.708L10.793 8 9.146 6.354a.5.5 0 1 1 .708-.708L11.5 7.293l1.646-1.647a.5.5 0 0 1 .708 0" />
                        </svg>
                    }

                </button>
                <DarkModeToggle />
            </div>
        </nav>
    )
}

export default Navbar