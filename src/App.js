import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

import Header from './Header';
import Bio from './Bio';

const theme = createMuiTheme({
  overrides: {
    MuiTouchRipple: {
      root: {
        color: '#512DA8'
      }
    },
    MuiTab: {
      root: {
        textTransform: 'none',
      },
      textColorInherit: {
        color: 'white'
      }
    },
    MuiTabs: {
      indicator: {
        backgroundColor: '#512DA8'
      }
    },
    MuiPaper: {
      root: {
        backgroundColor: '#212121'
      }
    },
    MuiAvatar: {
      root: {
        height: '150px',
        width: '150px'
      }
    }
  }
});



const Skills = () => (
  <div class="page">
    Skills!
  </div>
)

class Blog extends Component {
  render() {
    return (
      <div class="page">
        Blog!
      </div>
    )
  }
}


class App extends Component {
  render() {
    return (
        <MuiThemeProvider theme={theme}>
          <Header />
          <Route path="/bio" component={Bio} />
          <Route path="/skills" component={Skills} />
          <Route path="/blog" component={Blog} />
        </MuiThemeProvider>
    );
  }
}

export default App;
