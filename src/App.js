import React from 'react';
import { Switch, Route } from 'react-router-dom'

import ClippedDrawer from './components/clippedDrawer/ClippedDrawer';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path={["/sales", "/"]}>
          <ClippedDrawer body='SALES' />
        </Route>
        <Route exact path="/purchase">
          <ClippedDrawer body='PURCHASE' />
        </Route>
        <Route exact path="/suppliers">
          <ClippedDrawer body='SUPPLIERS' />
        </Route>
        <Route exact path="/products">
          <ClippedDrawer body='PRODUCTS' />
        </Route>
        <Route exact path="/expenses">
          <ClippedDrawer body='EXPENSES' />
        </Route>
        <Route exact path="/users">
          <ClippedDrawer body='USERS' />
        </Route>
        <Route exact path="/customers">
          <ClippedDrawer body='CUSTOMERS' />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
