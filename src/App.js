import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import AllGames from './components/AllGames';
import StoryGames from './components/StoryGames';
import Games from './components/Games';
import SingleCourse from './components/SingleCourse';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import SModeGame from './components/SModeGame';

function App() {
  return (
    <Router >
      <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/apps' element={<Navigate replace to="/games" />} />
         <Route path='/games' element={<Games />}>
            <Route path='all-games' element={<AllGames />} >
              <Route path=':id' element={<SingleCourse />} /> 
            </Route>
            <Route path='story-games' element={<StoryGames />} >
            <Route path=':Sid' element={<SModeGame />} /> 
            </Route>
         </Route>
         <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
