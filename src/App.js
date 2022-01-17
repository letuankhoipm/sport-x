import { Provider } from 'react-redux';
import './App.css';
import { SportsStoreDataStates } from './store/states/DataState';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import ShopConnector from './pages/ShopConnector';

function App() {
  return (
    //The data will be applied to the application using a Provider
    <Provider store={SportsStoreDataStates}>
      <Router>
        <Switch>
          <Route path='/shop' component={ShopConnector}></Route>
          <Redirect to='/shop'></Redirect>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
