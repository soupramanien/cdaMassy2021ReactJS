import './App.css';
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

import Coquille from './components/coquille/Coquille';
import Header from './components/coquille/Header';
import Menu from './components/coquille/Menu';

function App() {
	return (
		<Provider store={store}>
			<div className="container">
				<Router>
					<Header />
					<Menu />

					<Switch>
						<Route exact path="/">
							<QuestionsProvider>
								<QuestionWorkspace />
							</QuestionsProvider>
						</Route>

						<Route exact path="/canaux">
							<Canaux />
						</Route>
						<Route exact path="/membres">
							<Membres />
						</Route>

						<Route exact path="/efgs/new" component={EFGAdd} />

						<Route path="/coquille">
							<Coquille />
						</Route>
						<Route exact path="/efgs" component={EFGList} />
						<Route exact path="/efgs/:idEfg" component={EFGDetail} />
					</Switch>
				</Router>
			</div>
		</Provider>
	);
}
export default App;
