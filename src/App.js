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
import TestModal from './pages/TestModal/TestModal';
import Articles from './pages/Blog/Articles';
import ArticleDetail from './pages/Blog/ArticleDetail';
import TableArticles from './pages/Blog/TableArticles';
import Signup from './pages/Authentification/Signup';
import Signin from './pages/Authentification/Signin';
import PropsScriling from "./pages/PropsSrilling"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout ><Home /></Layout>} />
        <Route path="/Website" element={<Layout  footer  ><Website /></Layout>} />
        <Route path="/FirstState" element={<Layout ><FirstState /></Layout>} />
        <Route path="/SimpleCounter" element={<Layout ><SimpleCounter /></Layout>} />
        <Route path="/CounterClassic" element={<Layout ><CounterClassic /></Layout>} />
        <Route path="/Toogle" element={<Layout ><Toogle /></Layout>} />
        <Route path="/ObjComponent" element={<Layout ><ObjComponent /></Layout>} />
        <Route path="/ListComponent" element={<Layout ><ListComponent /></Layout>} />

        <Route path="/FetchJsonPlaceHolder" element={<Layout ><FetchJsonPlaceHolder /></Layout>} />
        <Route path="/MouseTracker" element={<Layout ><MouseTracker /></Layout>} />
        <Route path="/TimerInterval" element={<Layout ><TimerInterval /></Layout>} />

        <Route path="/DarkMode" element={<Layout ><DarkMode /></Layout>} />
        <Route path="/FetchUsers" element={<Layout ><FetchUsers /></Layout>} />
        <Route path="/testmodal" element={<Layout ><TestModal /></Layout>} />
        <Route path="/Signin" element={<Layout ><Signin /></Layout>} />
        <Route path="/Signup" element={<Layout ><Signup /></Layout>} />

        <Route path="/Articles" element={<Layout ><Articles /></Layout>} />
        <Route path="/PropsScriling" element={<Layout ><PropsScriling /></Layout>} />
        <Route path="/TableArticles" element={<Layout ><TableArticles /></Layout>} />
        <Route path="/ArticleDetail/:id" element={<Layout ><ArticleDetail /></Layout>} />

        {/* il doit etre la derniere route  */}
        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>


  );
}

export default App;
