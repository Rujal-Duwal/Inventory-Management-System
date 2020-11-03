import React from 'react';
import { Switch, Route } from 'react-router-dom'

import SideNavBar from './components/clippedDrawer/ClippedDrawer';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path={["/sales", "/"]}>
          <SideNavBar body='SALES' />
        </Route>
        <Route exact path="/purchase">
          <SideNavBar body='PURCHASE' />
        </Route>
        <Route exact path="/expenses">
          <SideNavBar body='EXPENSES' />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
