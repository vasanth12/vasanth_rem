import React from "react";
import { Form, Button, Message} from "semantic-ui-react";
import InlineError from "../messages/InlineError";
import validator from 'validator';
import propTypes from 'prop-types';

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
  this.setState({data: {...this.state.data, [e.target.name]:e.target.value} });
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
    this.setState({loading:true});
    this.props
    .submit(this.state.data)
    .catch(err => this.setState({errors:err.response.data.errors, loading:false }));
  }
};

Validate = (data) =>{
   const errors = {};
   if(!validator.isEmail(data.email)){errors.email="Invalid Email";}
   if(!data.password){errors.password = "can't be blank";}
   return errors;
};

  render(){
    const { data,errors,loading } = this.state;
    return(
      <Form onSubmit={this.onSubmit} loading={loading}>
        {errors.global && <Message negative>
          <Message.Header>Something went wrong</Message.Header>
          <p>{errors.global}</p>
      </Message>}
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
        {errors.password && <InlineError text={errors.password}/>}
        </Form.Field>
        <Form.Field>
          <Button className="primary">Login</Button>
        </Form.Field>
      </Form>
    );
  }
}

LoginForm.propTypes = {
    submit:propTypes.func.isRequired
}

export default LoginForm;
