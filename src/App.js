import React from 'react';
import { Route } from "react-router-dom";
import HomePage from "./component/pages/HomePage";
import LoginPage from "./component/pages/LoginPage";
import DashboardPage from './component/pages/DashboardPage';
import UserRoute from './component/routes/UserRoute.js';
import GuestRoute from './component/routes/GuestRoute.js';
import PropTypes from 'prop-types';

const App = ({ location }) => <div>
  <Route location={ location } path="/" exact component={HomePage} />
  <GuestRoute location={ location } path="/login" exact component={LoginPage}/>
  <UserRoute location={ location } path="/dashboard" exact component={DashboardPage}/>
</div>;


App.propTypes = {
  location:PropTypes.shape({
    pathname:PropTypes.string.isRequired
  }).isRequired
};

export default App;
