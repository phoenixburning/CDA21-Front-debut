import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

import Musiques from './pages/musiques'
import Header from './header/header'
import UpdateItem from './pages/updateItem'

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Bienvenue au GRETA</h1>
      <Router>
        <Header />
        <Route path="/" exact >
          <Musiques />
        </Route>
        <Route path="/musiques" exact >
          <Redirect to="/" />
        </Route>
        <Route path="/maj" exact>
          <UpdateItem  />
        </Route>
      </Router>
    </div>
  );
}

export default App;
