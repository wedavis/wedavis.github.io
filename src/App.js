import Navbar from './components/Navbar'
import {HashRouter as Router,Switch,Route} from 'react-router-dom'
import Contact from './components/Pages/Contact/Contact'
import Home from './components/Pages/Home/Home'
import './App.css';
import Projects from './components/Pages/Projects/Projects';
import Weather from './components/Weather/Weather';


function App() {

  return (
    <div className="App">
    <Router>
      <Navbar />
        <Switch>
          <Route path='/' exact component ={Home}/>
          <Route path="/contact" component ={Contact}/>
          <Route path="/projects" component ={Projects}/>
          <Route path='/'/>
         </Switch>
         <Switch>
          <Route path='/weather' exact component ={Weather}/>
         </Switch>
      </Router>
    </div>
  );

}

export default App;
