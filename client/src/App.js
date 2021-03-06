import React, { Fragment } from 'react';
import SearchForm from './components/SearchForm';
import Alert from './components/Alert';
import Names from './components/Names';
import Total from './components/Total';

// Redux imports
import { Provider } from 'react-redux';
import store from './store';

import './App.css';

const App = () =>
<Provider store={store}>
  <Fragment>
    <Alert />
    <SearchForm />
    <Total />
    <Names />
  </Fragment>
</Provider>
  

export default App;
