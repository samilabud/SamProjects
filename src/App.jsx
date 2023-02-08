import {
    BrowserRouter as Router,
    Routes,
    Route,
    NavLink,
} from 'react-router-dom';
import Home from './components/Home';
import ExpandingCards from './components/ExpandingCards';
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <div className="App-top-menu">
          <ul>
            <li>
              <NavLink 
                to="/" 
                className={({ isActive }) => isActive ? 'is-active' : 'App-link'}
                >Home</NavLink>
            </li>
            <li>
              <NavLink
                to="/expanding-cards"
                className={({ isActive }) => isActive ? 'is-active' : 'App-link'}
               >Expanding Cards</NavLink>
            </li>
          </ul>
          
        </div>
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/expanding-cards' element={<ExpandingCards />}></Route>
        </Routes>
       </Router>
    </div>
  )
}

export default App
