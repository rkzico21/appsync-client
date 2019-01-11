import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Stories from "./Stories";
import StoryDetail from './StoryDetail';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
const theme = createMuiTheme();

class Home extends Component {
constructor(props){
  super(props);
  this.state = {
    story: null
  }
 }

 storySelectedCallback = (data) => {
    console.log("Story selected");
    this.setState({story: data});
 }

 render() {
  const { classes } = this.props;
    return (
      
        <MuiThemeProvider theme={theme}>
        <Grid container
        direction="row"
        justify="flex-start"
        alignItems="stretch"
        style={{marginTop:10}} spacing={24}>
        
          <Grid Item xs={3}>
            <Paper>
             <p> Stories</p>
              <Stories storySelected = {this.storySelectedCallback}/>
            </Paper>
          </Grid>
          <Grid Item xs={7} style={{marginLeft:20}}>
             
              <StoryDetail story = {this.state.story}></StoryDetail>
              
          </Grid>  
        </Grid>
         </MuiThemeProvider>
      
    );
  }
}
const style = {
 margin: 15,
};
export default Home;