export default ({ dispatch }) =>  next => action => {
    // Check to see if the action has a promise on its 'payload' property
    // IF YES
    //      Then wait for it to resolve
    // IF NO
    //      Then send it down to the next middleware

    if (!action.payload || !action.payload.then) {
        return next(action);
    }
};

