import { useReducer  } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Login from './Pages/Login';
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard';
import ContactListContext from "./contexts/ContactListContext";
import { reducer, initialState } from "./contexts/reducer";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <ContactListContext.Provider value={{ state, dispatch }}>
      <Router>
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </ContactListContext.Provider>
  );
}

export default App;
