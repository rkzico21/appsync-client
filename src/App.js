import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RouterMain from './components/RouterMain'
import Amplify, { Auth } from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react';

Amplify.configure({
  Auth: {
      region: 'us-east-1',
      userPoolId: 'us-east-1_9R0cdbN1z',
      userPoolWebClientId: '1bq1fe3qld27g2icbjrtr8e7sc',
      mandatorySignIn: true
      // OPTIONAL - customized storage object
      //storage: new MyStorage(),
      // OPTIONAL - Manually set the authentication flow type. Default is 'USER_SRP_AUTH'
      //authenticationFlowType: 'USER_PASSWORD_AUTH'
    },
    "aws_appsync_graphqlEndpoint": "https://5wf6unnvija4nlknimdsqhmxsi.appsync-api.us-east-1.amazonaws.com/graphql",
    "aws_appsync_region": "us-east-1",
    "aws_appsync_authenticationType": "AMAZON_COGNITO_USER_POOLS",


});

class App extends Component {
  render() {
    return (
      <div className="App">
        <RouterMain/>
      </div>
    );
  }
}


export default withAuthenticator(App, true);
//export default App;