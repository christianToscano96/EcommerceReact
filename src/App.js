import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

//theme
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme  from './theme/theme';
import Grid from '@material-ui/core/Grid'
//componentes
import ListInmuebles from './components/views/ListInmuebles';
import Navbar from './components/layout/Navbar';

import './App.css';

function App() {
  return (

    <Router>
      <MuiThemeProvider theme={theme}>
        <Navbar />

        <Grid container>
          <Switch>
            <Route path="/" exact component={ListInmuebles}></Route>

          </Switch>
        </Grid>
        
      </MuiThemeProvider>
    </Router>  
  );
}

export default App;
