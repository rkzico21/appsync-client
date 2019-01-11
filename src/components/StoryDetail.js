import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import * as queries from '../graphql/queries';
import * as mutations from '../graphql/mutations';
import Amplify, { API, graphqlOperation } from "aws-amplify";
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

class StoryDetail extends React.Component {
  constructor(props){
    super(props);
    
    this.state = {
      story: this.props.story
     }
  }

  componentDidMount(){
    var _this = this;
    console.log("mounted");
    if(this.props.story)
    {
       
        this.setState({story: this.props.story});
    }
  }

  renderStory(story) {
    return (
            <div>
             <div>   
                <h2 style={{textAlign:"left"}}>{story.title}</h2>
            </div>
            <div style={{textAlign:"left"}}> 
                Id: {story.id}
             </div>
            
            </div>
        );
  }

  render() {
    return (
      <div> 
         
         { this.props.story && this.renderStory(this.props.story)} 
       </div>  
      
    );
  }
}

export default StoryDetail;