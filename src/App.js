import React from 'react';
import { Switch, Route } from 'react-router-dom'
import BillPrint from './components/bill/BillPrint';

import ClippedDrawer from './components/clippedDrawer/ClippedDrawer';
import Pos from './pages/pos/Pos';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path={"/pos"}>
          <Pos />
        </Route>
        <Route exact path={"/posBill"}>
          <BillPrint />
        </Route>
        <Route exact path={["/sales", "/"]}>
          <ClippedDrawer body='SALES' />
        </Route>
        <Route exact path="/purchase">
          <ClippedDrawer body='PURCHASE' />
        </Route>
        <Route exact path="/suppliers">
          <ClippedDrawer body='SUPPLIERS' />
        </Route>
        <Route exact path="/add-suppliers">
          <ClippedDrawer body='ADD_SUPPLIERS' />
        </Route>
        <Route exact path="/products">
          <ClippedDrawer body='PRODUCTS' />
        </Route>
        <Route exact path="/add-Products">
          <ClippedDrawer body='ADD_PRODUCT' />
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
        <Route exact path="/add-customers">
          <ClippedDrawer body='ADD_CUSTOMER' />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
