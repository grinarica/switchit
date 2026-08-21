import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Table from './components/Table'
import Home from './components/Home'
import BlankDifficulty from './components/BlankDifficulty'

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Home />} />

        <Route path='/table/:difficulty' element={<Table />} />
        <Route path='/table/' element={<BlankDifficulty />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
