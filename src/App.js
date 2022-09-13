import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Book from './components/Book/Book';
import Login from './components/Login/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
    <Header/>
    <Switch>
      <Route path="/home"><Home /></Route>
      <Route path="/login"><Login /></Route>
      <Route path="/book/:bedType"><Book /></Route>
      <Route path="/"><Home /></Route>
    </Switch>
</Router>
  );
}

export default App;
