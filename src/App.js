import './App.css';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { NavLink, Route, Switch } from 'react-router-dom';
import Teams from './views/Teams/Teams';
import Players from './views/Players/Players';
import Home from './views/Home/Home';
import Player from './views/Players/Player';
import Team from './views/Teams/Team';

function App() {
  return (
    <BrowserRouter>
      <header>
        <NavLink to="/teams" exact>
          Teams
        </NavLink>
        <NavLink to="/players" exact>
          Players
        </NavLink>
      </header>
      <Switch>
        <Route path="/" exact component={Home} />
        {/* VERSION 1 */}
        <Route path="/teams/:id" component={Team} />

        {/* VERSION 2 */}
        {/* <Route path="/teams/:id">
          <Team />
        </Route> */}
        <Route path="/teams">
          <Teams />
        </Route>
        <Route path="/players/:id" component={Player} />
        <Route path="/players" component={Players} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
