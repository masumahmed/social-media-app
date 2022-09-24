import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home.js';
import Login from './Pages/Login/Login.js';
import Profile from './Pages/Profile/Profile.js';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
