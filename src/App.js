import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Website from "./pages/Website.js"
import NotFound from './pages/NotFound.js';
import FirstState from './pages/FirstState.js';
import SimpleCounter from './pages/SimpleCounter.js';
import Toogle from "./pages/Toogle.js"
import ListExemple from './pages/ListExemple.js';
import ExempleObject from './pages/ObjExemple.js';
import ReactParticles from "./pages/ReactParticles.js"


function App() {

    // 1 class devient className
    // 2 un component commence par une Majuscule
    // 3 on referme les balises ( img / br / input )
    // 4 on importe une image comme un fichier js
    // 5 on supprime les commmentaires html
    // 6 style="height: 8px" devient style={{height : "8px"}} // 

  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Website />} />
            <Route path='/FirstState' element={<FirstState />} />
            <Route path='/SimpleCounter' element={<SimpleCounter />} />
            <Route path='/Toogle' element={<Toogle />} />
            <Route path='/ListExemple' element={<ListExemple />} />
            <Route path='/ExempleObject' element={<ExempleObject />} />
            <Route path='/ReactParticles' element={<ReactParticles />} />
            <Route path="*" element={<NotFound />} /> 
        </Routes>
    </BrowserRouter>
  )
}

export default App;
