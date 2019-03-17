import { SAVE_COMMENT, FETCH_COMMENTS } from 'actions/types';

export default function(state = [], action) {
    switch(action.type) {
        case SAVE_COMMENT:
            /*Take the existing state array (use the spread operator ... 
              to take all the elements in the state array, and add them to a new one.
              Once those existing state array elements are copied to this new array, then
              also add on the payload from the action that was passed in.*/
            return [...state, action.payload];
        case FETCH_COMMENTS:
            const comments =action.payload.data.map(comment => comment.name);
            return [...state, ...comments];
        default:
            return state;
    }
}