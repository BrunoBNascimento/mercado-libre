import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Details from './pages/details';
import Products from './pages/products';
import { Provider } from './commons/hooks/use-categories';

function App() {
  return (
    <Provider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Products />
          </Route>
          <Route path="/items/:id">
            <Details />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
