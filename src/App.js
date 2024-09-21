import {Routes, Route} from 'react-router-dom';
import Home from './Home';
import Character from './Character';
import Header from './Components/Header';

function App() {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path="/" element= {<Home />} />
				<Route path="/character" element={<Character />} />
			</Routes>
		</div>
	);
}

export default App;
