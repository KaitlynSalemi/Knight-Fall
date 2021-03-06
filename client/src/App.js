import React, { useState } from 'react';
import Home from "./pages/Home";
import Character from "./pages/Character";
import Story from "./pages/Story";
import Market from "./pages/Market"
import GameOver from "./pages/GameOver";
import Highscore from "./pages/Highscore";
import NoMatch from "./pages/NoMatch";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signup from './pages/SignUp';
import Login from "./pages/LogIn";


function App() {

  const [heroIndex, setHeroIndex] = useState(1)

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/character" render={(props) => <Character {...props} heroIndex={heroIndex} setHeroIndex={setHeroIndex} />} />
          <Route exact path="/story" render={(props) => <Story {...props} heroIndex={heroIndex} setHeroIndex={setHeroIndex} />} />
          <Route exact path="/market" component={Market} />
          <Route exact path="/highscore" component={Highscore} />
          <Route exact path="/gameover" component={GameOver} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>

  );
}

export default App;
