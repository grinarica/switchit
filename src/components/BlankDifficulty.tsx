import { useEffect } from "react"
import { useNavigate } from "react-router"

function BlankDifficulty() {
  const navigate = useNavigate()

  useEffect(() => {
    navigate("/")
  }, [navigate])

  return (
    <div></div>
  )
}

export default BlankDifficulty