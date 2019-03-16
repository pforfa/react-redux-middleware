import commentsReducer from 'reducers/comments';
/* Note that import simply the name of the folder (actions in this case), 
   by default imports an index.js file found inside that folder.
   This is a shorthand syntax. */
import { saveComment } from 'actions';

it('handles actions of type SAVE_COMMENT', () => {
    const commentText = 'New Comment';
    const saveCommentAction = saveComment(commentText);
    
    const newState = commentsReducer([], saveCommentAction);

    expect(newState).toEqual([commentText]);
});

it('handles action of an unknown type', () => {
    /* No need to pass a payload since the action will not be resolved either way.
       Also, an empty object such as {} can be passed it. It's essentially the same as
       passing in '{type: 'SomeUnknownAction}', since both won't resolve to a known action within the reducer. */
    const newState = commentsReducer([], {type: 'SomeUnknownAction'})

    expect(newState).toEqual([])
});