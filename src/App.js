import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home';
import Header from './components/Header/header.component';
import { Switch,Route,Redirect } from 'react-router-dom';
import Details from './components/Details/details.component';
import Trending from './components/Trending/trending.component';
function App() {
  return (
    <div className="App">
    <Header/>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/home' component={Home} />
      <Route exact path='/trending' component={Trending} />
      <Route exact path='/details' component={Details} />
    </Switch>
      
      
    </div>
  );
}

export default App;
