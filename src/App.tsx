import { HashRouter, Route, Routes } from 'react-router'
import Table from './components/Table'
import Home from './components/Home'
import BlankDifficulty from './components/BlankDifficulty'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className='max-h-svh h-svh max-w-svw w-svw bg-gray-100 dark:bg-neutral-900 flex flex-col'>
      <HashRouter>
        <Navbar />

        <Routes>

          <Route path='/' element={<Home />} />

          <Route path='/table/:difficulty' element={<Table />} />
          <Route path='/table/' element={<BlankDifficulty />} />

        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
