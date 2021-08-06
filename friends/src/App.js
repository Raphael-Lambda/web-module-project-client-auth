import { Route, Link, Switch } from 'react-router-dom'
import './App.css';

import Header from './components/Header'
import FriendList from './components/FriendList'
import Login from './components/Login'
import PrivateRoute from './components/Private';

function App() {
  console.log("render App")
  return (
    <>
    <Header />
    <Switch>
      <Route path='/login'>
        <Login />
      </Route>
      <PrivateRoute path='/protected' component={FriendList} />
    </Switch>
    </>
  );
}

export default App;
