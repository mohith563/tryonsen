//kindly give "Login" as id for Login button
//give name as loginUserName, loginPassword for corresponding fields
import React, { Component } from 'react';
import { Page, Input, Button } from 'react-onsenui';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

class Login extends Component {
  render() {
    return (
      <Page id='LoginComponent'>
        <section style={{ textAlign: 'center' }}>
          <Input
            value={this.props.loginUserName}
            onChange={this.props.handleChange}
            modifier='material'
            placeholder='Username'
            name='loginUserName'
          />
          <br />
          <Input
            value={this.props.loginPassword}
            onChange={this.props.handleChange}
            modifier='material'
            placeholder='Password'
            type='password'
            name='loginPassword'
          />
          <br />
          <Button id='Login' onClick={this.props.handleLogin}>
            Login
          </Button>
        </section>
      </Page>
    );
  }
}

export default Login;
