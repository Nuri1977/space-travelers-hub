import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getRocketsFromAPI } from './redux/rockets/rocketsAPI';
import Navbar from './components/navbar/Navbar';
import MissionsContainer from './components/missions/MissionsContainer';
import { getMissions } from './redux/missions/missions';
import RocketsContainer from './components/rockets/RocketsContainer';
import ProfileContainer from './components/myProfile/ProfileContainer';
import './App.css';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRocketsFromAPI());
    getMissions()(dispatch);
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<RocketsContainer />} />
        <Route path="missions" element={<MissionsContainer />} />
        <Route path="profile" element={<ProfileContainer />} />
      </Routes>
    </div>
  );
}

export default App;
