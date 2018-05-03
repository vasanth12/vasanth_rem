import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth.js';

const HomePage = ({isAuthenticated, logout}) =>(
   <div className="ui container">
    <h1>Home Page</h1>
    {isAuthenticated ?<button onClick = { () => logout()}>LogOut</button>:<div><Link to="/login">Login</Link> or <Link to="/signup">signup</Link></div>}
   </div>
 );

 HomePage.propTypes = {
   isAuthenticated:PropTypes.bool.isRequired,
   logout:PropTypes.func.isRequired
 }

function mapStateToProps(state){
  return{
    isAuthenticated:!!state.user.token
  }
}
export default connect(mapStateToProps, { logout })(HomePage);
