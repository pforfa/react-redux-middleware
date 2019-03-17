import React, { Component } from 'react';
import { connect } from 'react-redux';

/*Note that this is the same import statement syntax as the one in the main
  index.js file, which is located in src/index.js.
  Look at the comment there to understand what 'actions' actually imports.
  The * in this import statement means that EVERYTHING will be imported from 
  the index.js file located under src/actions/index.js  */
import * as actions from 'actions';

class CommentBox extends Component {
  
    state = {
        comment: ''
    };

    // Our component just got rendered
    componentDidMount() {
        console.log("ComponentDidMount() called. Check if should navigate away.");
        this.shouldNavigateAway();
    }

    componentDidUpdate() {
        console.log("ComponentDidUpdate() called. Check if should navigate away.");
        this.shouldNavigateAway();
    }

    shouldNavigateAway() {
        if(!this.props.auth) {
            // React router library is available is a component is rendered by it.
            console.log('Leaving this page. Not authorized to access if not logged in.');
            this.props.history.push('/');
        }
    }


    handleChange = (event) => {
        console.log("On change fired with: " + event.target.value);
        this.setState( { comment: event.target.value })
    };

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

function mapStateToProps(state) {
    return { auth: state.auth };
}

export default connect(mapStateToProps, actions)(CommentBox);