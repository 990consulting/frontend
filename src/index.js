/*
 * Copyright (c) 2018 Open990.org, Inc.. All rights reserved.
 */

import "@babel/polyfill";
import "whatwg-fetch";

import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider } from '@material-ui/core/styles/index';

import App from 'App/App.js';

import theme from 'theme';
import './App/App.css';
import 'react-table/react-table.css'


ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </MuiThemeProvider>, document.getElementById('root')
);
