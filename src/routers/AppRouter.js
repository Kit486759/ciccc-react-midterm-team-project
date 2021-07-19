import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PrivateRoute from './PrivateRoute';
import App from "../components/app/App";
import Detail from "../components/detail/Detail";
import Cart from "../components/cart/Cart";
import SearchResult from "../components/searchResult/SearchResult";
import Account from "../components/account/Account";
import Wrapper from '../components/wrapper/Wrapper';
import Category from '../components/category/Category';
import Checkout from "../components/checkout/Checkout";
import EditAccount from "../components/account/EditAccount";

const AppRouter = () => (
  <BrowserRouter>
    <Wrapper>
      <Switch>
        <Route path="/ciccc-react-midterm-team-project/" component={App} exact={true} />
        <Route path="/ciccc-react-midterm-team-project/detail/:id" component={Detail} />
        <Route path="/ciccc-react-midterm-team-project/cart" component={Cart} />
        <Route path="/ciccc-react-midterm-team-project/search/:keywords" component={SearchResult}/>
        <Route path="/ciccc-react-midterm-team-project/account" component={Account}/>
        <Route path="/ciccc-react-midterm-team-project/edit_account" component={EditAccount} />
        <PrivateRoute path="/ciccc-react-midterm-team-project/checkout" component={Checkout} />
        <Route path="/ciccc-react-midterm-team-project/category/:type" component={Category}/>
      </Switch>
    </Wrapper>
  </BrowserRouter>
);

export default AppRouter;
