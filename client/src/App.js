import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home.js';
import Login from './Pages/Login/Login.js';
import Profile from './Pages/Profile/Profile.js';

export default function App() {
	return (
		<Routes>
			<Route path="*" element={<NotFound />} />
			<Route path="/" element={<Home />} />
			<Route path="/login" element={<Login />} />
			<Route path="/profile" element={<Profile />} />
		</Routes>
	);
}

function NotFound() {
	return <center>
		<h1 id='notFound'>Status 404 URL not found</h1>
		<h1><i className="fa-solid fa-face-dizzy"></i></h1>
	</center>
}
