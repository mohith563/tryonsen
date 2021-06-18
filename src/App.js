import React, { Component } from 'react';
import {
  Page,
  Toolbar,
  Tab,
  Tabbar,
  AlertDialog,
  AlertDialogButton
} from 'react-onsenui';
import ons from 'onsenui';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
import Login from './Components/login';
import Register from './Components/register';

class App extends Component {
  state = {
    users: {},
    index: 0,
    userName: undefined,
    password: undefined,
    confirmPassword: undefined,
    loginUserName: undefined,
    loginPassword: undefined,
    msg: '',
    alertOpen: false
  };

  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleAlertOpen = this.handleAlertOpen.bind(this);
    // this.alertRef = React.createRef();
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleReset = () => {
    this.setState({
      userName: '',
      password: '',
      confirmPassword: '',
      loginUserName: '',
      loginPassword: ''
    });
  };

  handleRegister = () => {
    if (
      this.state.userName &&
      this.state.password !== '' &&
      this.state.password === this.state.confirmPassword
    ) {
      this.setState({
        // users: [
        //   ...this.state.users,
        //   {
        //     userName: this.state.userName,
        //     password: this.state.password
        //   }
        // ],
        users: {
          ...this.state.users,
          [this.state.userName]: this.state.password
        },
        msg: 'Successfully Registered',
        index: 0
      });
    } else {
      this.setState({ msg: 'Empty fields or Password mismatch' });
    }
    this.handleAlertOpen();
  };

  handleLogin = () => {
    const { loginUserName, loginPassword } = this.state;
    // const found = this.state.users.find(function (user) {
    //   return user.userName === loginUserName && user.password === loginPassword;
    // });
    const found = this.state.users[loginUserName] === loginPassword;
    if (found) {
      this.setState({ msg: 'You are now signed in!' });
    } else {
      this.setState({ msg: 'Username or password incorrect!' });
    }
    this.handleAlertOpen();
  };

  renderToolbar = () => {
    const titles = ['Login', 'Register'];
    return (
      <Toolbar>
        <div className='center'>{titles[this.state.index]}</div>
      </Toolbar>
    );
  };

  handleAlertOpen() {
    this.setState({
      alertOpen: !this.state.alertOpen
    });
  }

  renderTabs = () => {
    return [
      {
        content: (
          <Login
            loginUserName={this.state.loginUserName}
            loginPassword={this.state.loginPassword}
            handleLogin={this.handleLogin}
            handleChange={this.handleChange}
          />
        ),
        tab: <Tab active label='Login' />
      },
      {
        content: (
          <Register
            userName={this.state.userName}
            confirmPassword={this.state.confirmPassword}
            password={this.state.password}
            handleChange={this.handleChange}
            handleRegister={this.handleRegister}
          />
        ),
        tab: <Tab label='Register' />
      }
    ];
  };

  render() {
    return (
      <Page renderToolbar={this.renderToolbar}>
        <AlertDialog
          id='my-alert-dialog'
          isOpen={this.state.alertOpen}
          ref={this.alertRef}
          onCancel={this.handleAlertOpen}
        >
          <div className='alert-dialog-title'>Alert</div>

          <div className='alert-dialog-content'>
            {/* You are now signed in Successfully Registered Empty fields or
            Password mismatch Username or password incorrect! */}
            {this.state.msg}
          </div>
          <AlertDialogButton
            onClick={this.handleAlertOpen}
            className='alert-dialog-button'
          >
            Ok
          </AlertDialogButton>
        </AlertDialog>
        <Tabbar
          onPreChange={({ index }) => this.setState({ index })}
          renderTabs={this.renderTabs}
          onPostChange={this.handleReset}
          position='bottom'
          index={this.state.index}
        />
      </Page>
    );
  }
}

export default App;
