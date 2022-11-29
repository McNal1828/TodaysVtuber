import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './components/main';
import SideBar from './components/sideBar';

function App() {
	return (
		<div>
			<SideBar />
			<Routes>
				<Route path='/tt' element={<Main />}></Route>
			</Routes>
			<h1>TLqkf</h1>
		</div>
	);
}

export default App;
