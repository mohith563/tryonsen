//kindly give "Register" as id for register button
//give name as userName password confirmPassword for corresponding fields

import React, { Component } from 'react';
import { Page, Input, Button } from 'react-onsenui';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

class Register extends Component {
  render() {
    return (
      <Page id='RegisterComponent'>
        <section style={{ textAlign: 'center' }}>
          <Input
            value={this.props.userName}
            float
            onChange={this.props.handleChange}
            modifier='material'
            placeholder='Username'
            name='userName'
          />
          <br />
          <Input
            value={this.props.password}
            float
            onChange={this.props.handleChange}
            modifier='material'
            placeholder='Password'
            type='password'
            name='password'
          />
          <br />
          <Input
            value={this.props.confirmPassword}
            float
            onChange={this.props.handleChange}
            modifier='material'
            placeholder='Confirm Password'
            type='password'
            name='confirmPassword'
          />
          <br />
          <Button id='Register' onClick={this.props.handleRegister}>
            Register
          </Button>
        </section>
      </Page>
    );
  }
}

export default Register;
