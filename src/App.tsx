import { HashRouter, Route, Routes } from 'react-router'
import Table from './components/Table'
import Home from './components/Home'
import BlankDifficulty from './components/BlankDifficulty'

function App() {
  return (
    <HashRouter>
      <Routes>

        <Route path='/' element={<Home />} />

        <Route path='/table/:difficulty' element={<Table />} />
        <Route path='/table/' element={<BlankDifficulty />} />

      </Routes>
    </HashRouter>
  )
}

export default App
