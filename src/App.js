import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'

import Header from './components/header/header'
import SideNavBar from './components/clippedDrawer/ClippedDrawer';
import { Grid } from '@material-ui/core';


function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Switch>
        <Route exact path={["/sales", "/"]}>
          <SideNavBar body='SALES' />
        </Route>
        <Route exact path="/purchase">
          <SideNavBar body='PURCHASE' />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
