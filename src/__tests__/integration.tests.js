import  React from 'react';
import { mount } from 'enzyme';
import Root from 'Root';
import App from 'components/App';

it('can fetch a list of comments and display them', () => {
    // Render the whole application
    const wrappedComponent = mount(
        <Root>
            <App/>
        </Root>
    );

    // Find the button for fetching comments from the place holder API
    wrappedComponent.find('.fetch-comments').simulate('click');

    expect(wrappedComponent.find('li').length).toEqual(500);

});