import { Route, Routes } from 'react-router-dom'
import './App.css'
import ProtectRoute from './components/ProtectRoute'
import HeaderPoke from './components/shared/HeaderPoke'
import Home from './pages/Home'
import Pokedex from './pages/Pokedex'
import PokeInfo from './pages/PokeInfo'

function App() {


    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<Home />} />

                {/* ruta protejida */}
                <Route element={<ProtectRoute />}>
                    <Route path='/pokedex' element={<Pokedex />} />
                    <Route path='/pokedex/:id' element={<PokeInfo />} />
                </Route>
            </Routes>
        </div>
    )
}

export default App
