import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Website from './pages/Website';
import NotFound from './pages/NotFound';
import FirstState from './pages/FirstState';
import SimpleCounter from './pages/SimpleCounter';

function App() {



  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Website />} />
        <Route path="/FirstState" element={<FirstState />} />
        <Route path="/SimpleCounter" element={<SimpleCounter />} />


        {/* il doit etre la derniere route  */}
        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>


  );
}

export default App;
