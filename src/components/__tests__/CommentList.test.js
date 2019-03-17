import React, { Component } from 'react';
import { mount } from 'enzyme';

import CommentList from 'components/CommentList';
import Root from 'Root';

let wrappedComponent;

beforeEach(() => {
    const initialState = {
        comments: ['Comment 1', 'Comment 2']
    };

   wrappedComponent = mount(
       <Root initialState={initialState}>
           <CommentList/>
       </Root>
   );
});

it('creates one <li> per comment', () => {
    // console.log(wrappedComponent.find('li').length)
    expect(wrappedComponent.find('li').length).toEqual(2);
});

it('shows the text for each comment', () => {
    expect(wrappedComponent.render().text()).toContain('Comment 1');
    expect(wrappedComponent.render().text()).toContain('Comment 1');
});