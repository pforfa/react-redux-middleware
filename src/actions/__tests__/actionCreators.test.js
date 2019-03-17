import { saveComment } from 'actions';
import { SAVE_COMMENT } from 'actions/types';

describe('saveComment', () => {
    it('has the correct action type', () => {
        const action = saveComment();
        
        expect(action.type).toEqual(SAVE_COMMENT);
    });

    it('has the correct payload', () => {
        const someComment = 'A payload comment';
        const action = saveComment(someComment);

        expect(action.payload).toEqual(someComment);
    });
});