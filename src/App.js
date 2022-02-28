import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import MissionsContainer from './components/MissionsContainer';
import RocketsContainer from './components/RocketsContainer';
import ProfileContainer from './components/ProfileContainer';

function App() {
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
