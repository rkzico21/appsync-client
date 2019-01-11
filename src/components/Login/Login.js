import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {
    Redirect,
  } from "react-router-dom";

const theme = createMuiTheme();

class Login extends Component {
constructor(props){
  super(props);
  this.state={
      name:'',
      password:'',
      redirectToReferrer: false
  }
}

handleClick(event){

}

render() {

    let { from } = this.props.location.state || { from: { pathname: "/" } };
    if (this.state.redirectToReferrer === true)
    { 
        return <Redirect to={from} />;
    }
    
    return (
      <div>
        <MuiThemeProvider theme={theme}>
          <div>
           <TextField
            label="Enter your Name"
            required={true}
            onChange = {(event,newValue) => this.setState({name:newValue})}
             />
           <br/>
             <TextField
               type="password"
               required={true}
               label="Enter your Password"
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
             <br/>
             <Button 
                variant="outlined" 
                color="primary" 
                style={{marginTop:15}}
                onClick={(event) => this.handleClick(event)} >
             Submit
             </Button>
         </div>
         </MuiThemeProvider>
      </div>
    );
  }
}

export default Login;