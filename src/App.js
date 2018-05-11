import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

import Header from './Header';
import Bio from './Bio';
import Skills from './Skills';
import Blog from './Blog';

const BLACK = '#212121',
      PURPLE = '#512DA8',
      GREY = '#E8E8E8'

const theme = createMuiTheme({
  overrides: {
    MuiTouchRipple: {
      root: {
        color: PURPLE
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
      root: {
        backgroundColor: BLACK
      },
      indicator: {
        backgroundColor: PURPLE
      }
    },
    MuiList: {
      padding: {
        padding: '48px'
      }
    },
    MuiAvatar: {
      root: {
        height: '150px',
        width: '150px',
        margin: '0 15px',
        float: 'left'
      }
    },
    MuiCard: {
      root: {
        margin: '16px;'
      }
    },
    MuiCardActions: {
      root: {
        borderTop: `1px solid ${GREY}`
      }
    },
    MuiListItemIcon: {
      root: {
        marginRight: '0',
        color: BLACK
      }
    }
  }
});

class App extends Component {
  render() {
    return (
        <MuiThemeProvider theme={theme}>
          <Header />
            <Switch>
              <Redirect exact from="/" to="/bio" />
              <Route path="/bio" component={Bio} />
              <Route path="/skills" component={Skills} />
              <Route path="/blog" component={Blog} />
            </Switch>
        </MuiThemeProvider>
    );
  }
}

export default App;
