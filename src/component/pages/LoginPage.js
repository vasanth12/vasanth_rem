import React from "react";
import LoginForm from "../forms/LoginForm";

class LoginPage extends React.Component{
submit = (data) => {
  console.log('coming to parent');
  console.log(data);
};
  render(){
    return(
      <div className="ui container">
        <h1>Login Page</h1>
        <LoginForm submit={ this.submit }/>
      </div>
    );
  }
}

export default LoginPage;
