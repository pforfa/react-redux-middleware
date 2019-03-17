import React, { Component } from 'react';
import { connect } from 'react-redux';

/*Note that this is the same import statement syntax as the one in the main
  index.js file, which is located in src/index.js.
  Look at the comment there to understand what 'actions' actually imports.
  The * in this import statement means that EVERYTHING will be imported from 
  the index.js file located under src/actions/index.js  */
import * as actions from 'actions';
import requireAuth from "./requireAuth";

class CommentBox extends Component {
  
    state = {
        comment: ''
    };

    handleChange = (event) => {
        console.log("On change fired with: " + event.target.value);
        this.setState( { comment: event.target.value })
    };

    componentDidUpdate() {
        console.log("ComponentDidUpdate() from CommentBox.");
    }


    handleSubmit = event => {
        // Prevent the default behavior of a form element, which is to reload the page on submission
        event.preventDefault();

        this.props.saveComment(this.state.comment);

        this.setState( { comment: '' });
    };

    render() {
       return (
           <div>
                <form onSubmit={this.handleSubmit}>
                    <h4>Add a Comment</h4>
                    <textarea onChange={this.handleChange} value={this.state.comment}/>
                    <div>
                        <button>Submit Comment</button>
                    </div>
                </form>
                <button className="fetch-comments" onClick={this.props.fetchComments}>Fetch Comments</button>
           </div>
       );
   } 
}

export default connect(null, actions)(requireAuth(CommentBox));