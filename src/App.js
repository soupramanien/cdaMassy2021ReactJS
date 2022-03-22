import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Provider } from 'react-redux';
import QuestionWorkspace from './components/question/QuestionWorkspace';
import Canaux from './components/canaux/Canaux';
import MembreCanal from './components/membres/MembreCanal';
import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
    <div>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/questions">Questions</Link>
              </li>
              <li>
                <Link to="/canaux">Canaux</Link>
              </li>

              <li>
                <Link to="/efg">Exercices</Link>
              </li>
            </ul>
          </nav>

        <Switch>
          <Route path="/questions">
              <QuestionWorkspace/>
          </Route>
          <Route path="/canaux">
              <Canaux/>
          </Route>
          <Route exact path="/membres" component={MembreCanal} >

          </Route>

          {/* <Route path="/efg">
              <MyComponent/>
          </Route> */}
        </Switch>
      </div>
    </Router>
  </div>
  </Provider>

  );
}
export default App;