import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';
import Root from 'Root';

let wrappedComponent;

beforeEach(() => {
    wrappedComponent = mount(
        <Root>
            <CommentBox/>
        </Root>
    );
});

afterEach(() => {
   wrappedComponent.unmount(); 
});

it('has a text area and two buttons', () => {
    expect(wrappedComponent.find('textarea').length).toEqual(1);
    expect(wrappedComponent.find('button').length).toEqual(2);
});

describe('the text area', () => {
    let testCommentValue = 'A comment for testing';
    beforeEach(() => {
                // Simulate a change event on the text area
                wrappedComponent.find('textarea').simulate('change', {
                    target: {
                        value: testCommentValue
                    }
                });
        
                /* Force component for immediately update. 
                Changing state in the CommentBox component triggers a re-render,
                however this re-render is asynchronous. What this means, is that this component
                gets put on a queue for the React framework to re-render it at some point in time,
                but this change won't be instantaneous. For testing purposes, this change NEEDS to be instantaneous,
                therefore a component re-render MUST be forced. Enzyme provides this force re-render method
                */
                wrappedComponent.update();
    });

    it('has a text area that users can type in', () => {
        /* Enzyme provides a method called prop(), which allows the inspection of a specific props on an element.
        In this case, the element that should've been updated is the text area's 'value' prop, which receives its value from the component's state.
        The state was updated with the simulate() method in the beginning of this test, the component was re-rendered with the update() method,
        therefore the 'value' prop in the textarea should've received the state change and updated properly.
        */
        expect(wrappedComponent.find('textarea').prop('value')).toEqual('A comment for testing')

    });

    it('empties text area when form is submitted', () => {
        // Simulate the form submission event
        wrappedComponent.find('form').simulate('submit');
        wrappedComponent.update();

        expect(wrappedComponent.find('textarea').prop('value')).toEqual('');

    });
})