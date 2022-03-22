
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

function App() {
	return (
		<Provider store={store}>
			<div>
				<Router>
					<div>
						<nav>
							<ul>
								<li>
									<Link to='/questions'>Sondages</Link>
								</li>
								<li>
									<Link to='/canaux'>Canaux</Link>
								</li>

								<li>
									<Link to='/efgs'>Exercices</Link>
								</li>
							</ul>
						</nav>

						<Switch>
							<Route path='/questions'>
								<QuestionsProvider>
									<QuestionWorkspace />
								</QuestionsProvider>
							</Route>

							<Route path='/canaux'>
								<Canaux />
							</Route>
							<Route path='/membres'>
								<Membres />
							</Route>
							<Route exact path='/efgs' component={EFGList} />
							<Route exact path='/efgs/:idEfg' component={EFGDetail} />
						</Switch>
					</div>
				</Router>
			</div>
		</Provider>
	);
}
export default App;
