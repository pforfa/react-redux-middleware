import React from 'react';
import { shallow } from 'enzyme';
import App from 'components/App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

/* 
App component will get initialized in beforeEach() function
*/
let wrappedComponent;

beforeEach(() => {
    wrappedComponent = shallow(<App />);
});

it ('shows a comment box', () => {
    expect(wrappedComponent.find(CommentBox).length).toEqual(1);


});

it ('shows one instance of comment list', () => {
    expect(wrappedComponent.find(CommentList).length).toEqual(1);
})