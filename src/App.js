import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Website from "./pages/Website.js"
import NotFound from './pages/NotFound.js';
import FirstState from './pages/FirstState.js';


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
            <Route path="*" element={<NotFound />} /> 
        </Routes>
    </BrowserRouter>
  )
}

export default App;
