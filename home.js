import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';

export class HomePage extends Component {


  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Take it or Leave it!" />
          <RaisedButton
            label="Take It"
            primary={true}
            style={styles.button}
            onClick={() => alert('click')}
          />
           <RaisedButton
            label="Leave It"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15,
    
  }
};

export default HomePage;
