import React, { Component } from 'react';

class CommentBox extends Component {
  
    state = {
        comment: ''
    }
  
    handleChange = (event) => {
        console.log("On change fired with: " + event.target.value);
        this.setState( { comment: event.target.value })
    };

    handleSubmit = event => {
        // Prevent the default behavior of a form element, which is to reload the page on submission
        event.preventDefault();

        // TODO - will eventually call an action creator with React Redux.
        // Currently the application is not wired in with Redux, therefore the Component's state will be updated.
        this.setState( { comment: '' });
    };

    render() {
       return (
            <form onSubmit={this.handleSubmit}>
                <h4>Add a Comment</h4>
                <textarea onChange={this.handleChange} value={this.state.comment}/>
                <div>
                    <button>Submit Comment</button>
                </div>
            </form>
       );
   } 
}

export default CommentBox;