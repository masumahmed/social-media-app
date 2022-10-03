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
	return <div className="waveWrapper">
		<svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
			<defs>
				<style type="text/css" dangerouslySetInnerHTML={{ __html: "\n      .wave {\n        animation: wave 32s linear infinite;\n      }\n\n      .wave1 {\n        animation: wave1 16s linear infinite;\n      }\n\n      .wave2 {\n        animation: wave2 8s linear infinite;\n      }\n\n      @keyframes wave {\n        0% {\n          transform: translateX(0%);\n        }\n\n        100% {\n          transform: translateX(100%);\n        }\n      }\n\n      @keyframes wave1 {\n        0% {\n          transform: scaleY(1.2) translateX(0%);\n        }\n\n        100% {\n          transform: scaleY(1.2) translateX(100%);\n        }\n      }\n\n      @keyframes wave2 {\n        0% {\n          transform: scaleY(.8) translateX(0%);\n        }\n\n        100% {\n          transform: scaleY(.8) translateX(100%);\n        }\n      }\n    " }} />
				<path id="sineWave" fill="#d63f3f" fillOpacity="0.2" d="M0,160 C320,300,420,300,740,160 C1060,20,1120,20,1440,160 V0 H0" />
			</defs>
			<use className="wave" href="#sineWave" />
			<use className="wave" x="-100%" href="#sineWave" />
			<use className="wave1" href="#sineWave" />
			<use className="wave1" x="-100%" href="#sineWave" />
			<use className="wave2" href="#sineWave" />
			<use className="wave2" x="-100%" href="#sineWave" />
		</svg>
		<center>
			<h1>Status 404 URL not found</h1>
			<h1><i className="fa-solid fa-face-dizzy"></i></h1>
		</center>
	</div>
}
