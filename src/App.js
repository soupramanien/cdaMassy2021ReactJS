import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import QuestionWorkspace from './components/questions/QuestionWorkspace';
import Canaux from './components/canaux/Canaux';
import Membres from './components/membres/Membres';
import { store } from './redux/store';
import { QuestionsProvider } from './contexts/questions.context';
import React from 'react';
import EFGList from './pages/EFGs/EFGList';
import EFGDetail from './pages/EFGs/EFGDetail';
import EFGAdd from './pages/EFGs/EFGAdd';
import Home from './components/home/Home';

import Coquille from './components/coquille/Coquille';

function App() {
	return (
		<div className="App">
			<Home />
		</div>
	);
}

export default App;
