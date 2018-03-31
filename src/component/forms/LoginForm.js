import React from "react";
import { Form, Button } from "semantic-ui-react";
import InlineError from "../messages/InlineError";
import validator from 'validator';

class LoginForm extends React.Component{
  state={
    data:{
      email:'',
      password:''
    },
    loading:false,
    errors:{}
  }

onChange = (e) => {
  this.setState({data: {...this.state.data, [e.target.name]:e.target.value} })
};

onSubmit = (e) =>{
  e.preventDefault();
  console.log('coming to submit event');
  console.log(this.state.data);
  const errors = this.Validate(this.state.data);
  console.log("errors");
  console.log(errors);
  this.setState({errors:errors});
  if(Object.keys(errors).length === 0){
    this.props.submit(this.state.data);
  }
};

Validate = (data) =>{
   const errors = {};
   if(!validator.isEmail(data.email)){errors.email="Invalid Email";}
   if(!data.password){errors.password = "can't be blank";}
   return errors;
};

  render(){
    const { data,errors } = this.state;
    return(
      <Form onSubmit={this.onSubmit}>
        <Form.Field error={!!errors.email}>
        <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="off"
            placeholder="example@example.com"
            value={data.email}
            onChange={this.onChange}
          />
          {errors.email && <InlineError text={errors.email} />}
        </Form.Field>
        <Form.Field error={!!errors.password}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            autoComplete="false"
            placeholder="Password"
            value={data.password}
            onChange={this.onChange}
          />
        </Form.Field>
        {errors.password && <InlineError text={errors.password}/>}
        <Form.Field>
          <Button className="primary">Login</Button>
        </Form.Field>
      </Form>
    );
  }
}

export default LoginForm;
