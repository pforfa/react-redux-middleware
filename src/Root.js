import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
/*This statement imports the reducers directory under src/reducers 
  By default when importing a whole directory, the importer will try to import the index.js file located
  within that directory. In this case, an index.js file is present, and it imports the default exported function
  called combineReducers
*/
import reducers from 'reducers';


/*The <Provider></Provider> tag that wraps around any component, such as <App/> component
  will help the rest of the components inside the application that have a connect()
  function to communicate with and get access to the redux store. There is only one 
  store instantiated within a typical redux application.

  This store will hold the state of the whole application, which means all of the components' states
  that communicate with the redux store (again, communication is setup with the connect() function)

  Note that this Root component was created in order to help with Redux testing with Jest and Enzyme.
  It allows the redux store to be imported into tests, by simply passing down the component that will be tested
  into this Root.js component.

  ES6 object destructuring is used with the following code: { children, initialState }
  What this syntax does is it pulls all the properties off of the object that's passed in (props in this case)
  and looks for all the values inside that object that are passed into the { }. In this case, children is there and initialState can also be passed in.
  If the values are there, then they are set into their own variables, with the same names as they were given inside the props object.
  Note that for initialState, IF there is no value passed in, then it defaults to an empty object and gets passed down to the createStore as such.
  This ensures that an undefined reference isn't passed in, which can cause some issues within redux.
*/
export default ({children, initialState = {} }) => {
    return (
        <Provider store={createStore(reducers, initialState)} >
            {children}
        </Provider>
    );
};