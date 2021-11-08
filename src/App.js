import Navbar from './components/Navbar'
import {HashRouter as Router,Switch,Route} from 'react-router-dom'
import Contact from './components/Pages/Contact/Contact'
import Home from './components/Pages/Home/Home'
import './App.css';
const App = () => ( 
    <div className="App">
    <Router>
      <Navbar />
        <Switch>
          <Route exact path = "/" component ={Home}/>
          <Route path = "/contact" component ={Contact}/>
          <Route path = "/"/>
          <Route path = "/"/>
         </Switch>
      </Router>
    </div>
  );


export default App;
