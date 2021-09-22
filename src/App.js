import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home';
import Header from './components/Header/header.component';
import { Switch,Route,Redirect } from 'react-router-dom';
import Details from './components/Details/details.component';
import Trending from './components/Trending/trending.component';
import Footer from './components/Footer/footer.component';
function App() {
  return (
    <div className="App">
    <Header/>
    <Switch>
      <Route exact path='/ITL_LAB1' component={Home} />
      <Route exact path='/ITL_LAB1/home' component={Home} />
      <Route exact path='/ITL_LAB1/trending' component={Trending} />
      <Route exact path='/ITL_LAB1/details' component={Details} />
    </Switch>
    <Footer/>
      
    </div>
  );
}

export default App;
