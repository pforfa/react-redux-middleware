import  React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';
import Root from 'Root';
import App from 'components/App';

beforeEach(() => {
    moxios.install();
    moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
        status: 200,
        response: [
            {
                name: 'Fetched comment #1'
            },
            {
                name: 'Fetched comment #2'
            }
        ]
    });
});

afterEach(() => {
    moxios.uninstall();
});

// Add a callback function which jest expects to be called if there is a delay inside the test, such as a setTimeout function
it('can fetch a list of comments and display them', (done) => {
    // Render the whole application
    const wrappedComponent = mount(
        <Root>
            <App/>
        </Root>
    );

    // Find the button for fetching comments from the place holder API
    wrappedComponent.find('.fetch-comments').simulate('click');

    // Introducer a small delay to allow moxios (axios request mocking library) to intercept the
    // request fired from the fetchComments action creator
    setTimeout(() => {
        wrappedComponent.update();

        expect(wrappedComponent.find('li').length).toEqual(2);

        // Call the done() callback function in order to signal Jest that the test finishes here.
        // Note that this is a setTimeout function, which causes a delay in testing.
        // Jest tries to finish the test as quickly as possible, and if this done() function isn't present,
        // the test will most likely fail because it won't take into consideration the result that the callback function inside of
        // setTimeout may produce.
        done();
        wrappedComponent.unmount();
    }, 500);

});