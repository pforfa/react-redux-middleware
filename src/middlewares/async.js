export default ({ dispatch }) =>  next => action => {

    // Check to see if the action has a promise on its 'payload' property
    // IF YES
    //      Then wait for it to resolve
    // IF NO
    //      Then send it down to the next middleware
    if (!action.payload || !action.payload.then) {
        return next(action);
    }

    // We want to wait for the promise to resolve
    // (get the actual data from the nextwork), and create a new action
    // with the data and dispatch it
    action.payload.then(function(response) {
        const newAction = { ...action, payload: response }; // take all the properties inside the action object
        dispatch(newAction);
    });
};

