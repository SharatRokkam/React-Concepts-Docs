import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFound from './NotFound';
// import other components and routes

function App() {
  return (
    <div>
      <Switch>
        {/* <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} /> */}
        <Route path='*' component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;