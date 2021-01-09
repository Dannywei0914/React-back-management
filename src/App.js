import logo from './logo.svg';
import './App.css';
import GlobalStyles from 'GlobalStyles';
import { Route, Switch } from 'react-router-dom';
import Portal from 'views/Portal'

function App() {
  return (
    <>
      <GlobalStyles />
      <Switch>
        <Route path={'/portal'} component={Portal} ></Route>
      </Switch>
    </>
  );
}

export default App;
