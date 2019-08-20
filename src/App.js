import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import {Switch, Route} from 'react-router-dom';

const HatsPage = (props) => {
  console.log(props); //for explore history object, match, location  
  return (
    <div>
      <h1>Hats Page</h1>
    </div>
  );
};


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop/hats' component={HatsPage} />
      </Switch>
          
    </div>
  )
}

export default App;
