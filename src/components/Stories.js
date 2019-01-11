import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import * as queries from '../graphql/queries';
import * as mutations from '../graphql/mutations';
import Amplify, { API, graphqlOperation } from "aws-amplify";
import { Button, IconButton } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/core/Icon';


class Stories extends React.Component {
  constructor(props){
    super(props);
    
    this.state = {
      stories: [],
      showForm: false,
      storyTitle:'',
      selectedIndex: -1,
    }
  }

  handleListItemClick = (event, index) => {
    this.setState({ selectedIndex: index });
    this.props.storySelected(this.state.stories[index]);
    this.displayForm(false);
  };

  componentDidMount() {
    var _this = this;
    
    var result = API.graphql(graphqlOperation(queries.getStories)).then(response=>{
        
        var stories = [];
        var storyCollection = response.data.getStories;
        for(var i=0; i< storyCollection.length; i++) {
            stories.push({
                id: storyCollection[i].id,
                title: storyCollection[i].title,
                index: i
            });
        } 

        _this.setState({stories : stories});
    });
  }

  displayForm(value) {
    this.setState({showForm: value});
  }
  
  createStory(event) {
    var _this = this;
    var result = API.graphql(graphqlOperation(mutations.createStory, {id: '', title:  this.state.storyTitle})).then(response=>{
        var story = response.data.createStory;
        var size = _this.state.stories.length;
        var stories = [..._this.state.stories, {id: story.id, title: story.title, index:size}];
        _this.setState({stories: stories});
    });
    
    this.displayForm(false);
  }

  renderStories() {
    var _this = this;
    var storyList = this.state.stories.map(function(story){
    return <ListItem key={story.id} 
            id={story.id} button
            selected={_this.state.selectedIndex === story.index} 
            onClick={event => _this.handleListItemClick(event, story.index)}> 
              <ListItemText primary={story.title}/> 
            </ListItem>;
  }); 
  
  return storyList;
}
 

  renderStoryForm(){
   
    
    return (
      <form>
        <TextField
            label="Enter Story Title"
            required={true}
            onChange = {(event,newValue) => this.setState({storyTitle:event.target.value})}
           />
        <Button 
              variant="outlined" 
              color="primary" 
              style={{marginTop:15}}
              onClick={(event) => this.createStory(event)} >
                Save
        </Button>
      </form>
    );
  }

  renderAddButton() {
    const { classes } = this.props;
      return(
        <div>
            <Button  color="primary"
             style={{marginTop:15}}
             onClick={(event) => this.displayForm(true)}>
              Add Story
           </Button>
          </div>
      )
  }

  render() {
    return (
      <div> 
        <div>
        { this.state.showForm === true ?  this.renderStoryForm() : this.renderAddButton() }
        </div>
        <div>
          <List>
           { 
             this.renderStories()
           }
           </List>
          </div>
      </div>  
      
    );
  }
}

export default Stories;