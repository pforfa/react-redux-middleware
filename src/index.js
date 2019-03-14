import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

/*This statement imports the reducers directory under src/reducers 
  By default when importing a whole directory, the importer will try to import the index.js file located
  within that directory. In this case, an index.js file is present, and it imports the default exported function
  called combineReducers
*/
import reducers from 'reducers';

/*The <Provider></Provider> tag that wraps around the <App/> component
  will help the rest of the components inside the application that have a connect()
  function to communicate with and get access to the redux store. There is only one 
  store instantiated within a typical redux application.

  This store will hold the state of the whole application, which means all of the components' states
  that communicate with the redux store (again, communication is setup with the connect() function)
*/
ReactDOM.render(
    <Provider store={createStore(reducers, {})}>
        <App />
    </Provider>,
    document.getElementById('root'));