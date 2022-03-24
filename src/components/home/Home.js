import React from 'react';
import { Provider } from 'react-redux';
import { Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Router } from 'react-router-dom';
import { QuestionsProvider } from '../../contexts/questions.context';
import EFGAdd from '../../pages/EFGs/EFGAdd';
import EFGDetail from '../../pages/EFGs/EFGDetail';
import EFGList from '../../pages/EFGs/EFGList';
import { store } from '../../redux/store';
import Canaux from '../canaux/Canaux';
import Coquille from '../coquille/Coquille';
import Dashbord from '../coquille/Dashbord';
import Footer from '../coquille/Footer';
import Header from '../coquille/Header';
import Menu from '../coquille/Menu';
import Membres from '../membres/Membres';
import QuestionWorkspace from '../questions/QuestionWorkspace';

export default function Home() {
	return (
		<Provider store={store}>
			<div>
				<Header />
				<Menu />

				<div>
					<Router>
						<Switch>
							<Route path="/questions">
								<QuestionsProvider>
									<QuestionWorkspace />
								</QuestionsProvider>
							</Route>
							<Route path="/">
								<Home />
							</Route>

							<Route path="/canaux">
								<Canaux />
							</Route>
							<Route path="/membres">
								<Membres />
							</Route>

							<Route exact path="/efgs/new" component={EFGAdd} />

							<Route path="/coquille" />
							<Route exact path="/efgs" component={EFGList} />
							<Route exact path="/efgs/:idEfg" component={EFGDetail} />
						</Switch>
					</Router>
				</div>

				<Footer />
			</div>
		</Provider>
	);
}
