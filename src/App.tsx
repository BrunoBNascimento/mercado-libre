import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Details from './pages/details';
import Products from './pages/products';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Products />
        </Route>
        <Route path="/:id">
          <Details />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;