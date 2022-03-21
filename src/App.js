import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Provider } from 'react-redux';
import QuestionWorkspace from './question/components/QuestionWorkspace';
import Canaux from './components/canaux/Canaux';
import Membres from './components/membres/Membres';
import { store } from './redux/store';
import { QuestionsProvider } from './question/contexts/questions.context';
import React from 'react';
import ReactDOM from 'react-dom';



function App() {
  return (
    <Provider store={store}>
    <div>    
      <Router>
        <div >
          <nav>
            <ul >
              <li >
                <Link to="/questions">Sondages</Link>
              </li>
              <li >
                <Link to="/canaux">Canaux</Link>
              </li>
              
              <li >
                <Link to="/efg">Exercices</Link>
              </li>
            </ul>
          </nav>
          
        <Switch>
          <Route path="/questions">
            <QuestionsProvider>
              <QuestionWorkspace/>
            </QuestionsProvider>
          </Route>


          <Route path="/canaux">
              <Canaux/>
          </Route>
          <Route path="/membres">
              <Membres/>
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
