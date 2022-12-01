import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './components/homepage';
import Main from './components/main';
import SideBar from './components/sideBar';

function App() {
	return (
		<div>
			<SideBar />
			<Routes>
				<Route path='/' element={<Homepage />}></Route>
				<Route path='/tt' element={<Main />}></Route>
			</Routes>
		</div>
	);
}

export default App;
