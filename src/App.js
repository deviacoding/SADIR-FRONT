import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Website from './pages/Website';
import NotFound from './pages/NotFound';
import FirstState from './pages/FirstState';
import SimpleCounter from './pages/SimpleCounter';
import CounterClassic from './pages/CounterClassic';
import Toogle from './pages/Toogle';
import ObjComponent from './pages/ObjComponent';
import ListComponent from './pages/ListComponent';
import DarkMode from './pages/DarkMode';
import Home from './pages/Home';
import Layout from './components/Layout/Layout';
import FetchJsonPlaceHolder from './pages/UseEffect/FetchJsonPlaceHolder';
import FetchUsers from './pages/UseEffect/FetchUsers';
import MouseTracker from './pages/UseEffect/MouseTracker';
import TimerInterval from './pages/UseEffect/TimerInterval';

function App() {



  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout  ><Home /></Layout>} />
        <Route path="/Website" element={<Layout  footer  ><Website /></Layout>} />
        <Route path="/FirstState" element={<FirstState />} />
        <Route path="/SimpleCounter" element={<SimpleCounter />} />
        <Route path="/CounterClassic" element={<CounterClassic />} />
        <Route path="/Toogle" element={<Toogle />} />
        <Route path="/ObjComponent" element={<ObjComponent />} />
        <Route path="/ListComponent" element={<ListComponent />} />
        <Route path="/FetchJsonPlaceHolder" element={<FetchJsonPlaceHolder />} />

        <Route path="/MouseTracker" element={<MouseTracker />} />
        <Route path="/TimerInterval" element={<TimerInterval />} />

        <Route path="/DarkMode" element={<DarkMode />} />
        <Route path="/FetchUsers" element={<FetchUsers />} />

        {/* il doit etre la derniere route  */}
        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>


  );
}

export default App;
