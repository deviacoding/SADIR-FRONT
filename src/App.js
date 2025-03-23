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
import ExempleCssFunction from "./components/ExempleCssFonction/ExempleCssFunction.js"
import ExCssUseState from './components/ExCssUseState/ExCssUseState.js';
import Home from './pages/Home.js';
import FirstUseEffect from './pages/FirstUseEffect.js';
import Etudiant from './pages/Etudiant.js';
import Layout from './components/Layout/Layout.js';
import Blog from './pages/Blog/BlogDetail.js';
import Timer from "./pages/ClearIntervalC.js"
import MouseTracker from './pages/Mousetracker.js';
import Basic from './pages/DataTable/Basic.js';
import BasicDB from './pages/DataTable/BasicDB.js';
import AllArticles from './pages/Blog/AllArticles.js';

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
     
            <Route path='/' element={<Layout navbar ><Home /></Layout>} />
            <Route path='/Website' element={<Website />} />

            <Route path='/FirstState' element={<FirstState />} />
            <Route path='/SimpleCounter' element={<SimpleCounter />} />
            <Route path='/Toogle' element={<Toogle />} />
            <Route path='/ListExemple' element={<ListExemple />} />
            <Route path='/ExempleObject' element={<ExempleObject />} />
            <Route path='/ReactParticles' element={<ReactParticles />} />

            <Route path='/ExempleCssFunction' element={<ExempleCssFunction />} />
            <Route path='/ExCssUseState' element={<ExCssUseState />} />


            <Route path='/FirstUseEffect' element={<FirstUseEffect />} />      
            <Route path='/Timer' element={<Layout navbar ><Timer /></Layout>} />      
            <Route path='/MouseTracker' element={<Layout navbar ><MouseTracker /></Layout>} />      
            <Route path='/Basic' element={<Layout navbar ><Basic /></Layout>} />      
            <Route path='/BasicDB' element={<Layout navbar ><BasicDB /></Layout>} />      
            <Route path='/Etudiant' element={<Etudiant />} />

            {/* Routes du blog */}



            <Route path='/articles' element={<AllArticles />} />
            <Route path='/blog/:id' element={<Blog />} />
            <Route path="*" element={<ReactParticles />} /> 
        </Routes>
    </BrowserRouter>
  )
}

export default App;
