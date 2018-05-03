import React from 'react';
import { Form, Button} from "semantic-ui-react";
import InlineError from "../messages/InlineError";
import PropTypes from 'prop-types';
import validator from 'validator';
class SignupForm extends React.Component{
  state = {
    data:{
      email:'',
      password:''
    },
    loading:false,
    errors:{}
  }

  onChange = (e) => {
  this.setState({data:{ ...this.state.data, [e.target.name]:e.target.value }});
  }

  onSubmit = (e) => {
    e.preventDefault();
    const errors = this.Validate(this.state.data);
    this.setState({errors:errors});
    if(Object.keys(errors).length === 0){
      this.setState({loading:true});
      this.props
      .submit(this.state.data)
      .catch(err => this.setState({errors:err.response.data.errors, loading:false }));
    }
  }

  Validate(data){
    const errors={}
    if(!validator.isEmail(data.email)) { errors.email ="Invalid Email"; }
    if(!data.password){errors.password = "can't be blank"; }
    return errors;
  }
  render(){
    const { data,errors } = this.state;
    return(
    <Form className="ui container" onSubmit = {this.onSubmit}>
    <label htmlFor="email">Email</label>
      <Form.Field error={!!errors.email}>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="email@email.com"
          value={data.name}
          onChange={this.onChange}
         />
         { errors.email && <InlineError text={errors.email} /> }
      </Form.Field>
      <label htmlFor="password">Password</label>
      <Form.Field error={!!errors.password}>
        <input type="password"
          id="password"
          name="password"
          placeholder="Password"
          value={data.password}
          onChange={this.onChange}
        />
        { errors.password && <InlineError text={errors.password} /> }
      </Form.Field>
      <Form.Field>
        <Button className="primary">Sign Up</Button>
      </Form.Field>
    </Form>
    );
  }
}
SignupForm.propTypes = {
  submit:PropTypes.func.isRequired
}
export default SignupForm;
