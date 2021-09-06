import Navbar from './components/Navbar'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Contact from './components/Pages/Contact/Contact'
import Home from './components/Pages/Home/Home'
import './App.css';
function App() {
  return (
    <div className="App">
    <Router>
      <Navbar />
        <Switch>
          <Route path='/' exact component ={Home}/>
          <Route path="/contact" component ={Contact}/>
          <Route path="/"/>
          <Route path='/'/>
         </Switch>
      </Router>
    </div>
  );
}

export default App;
