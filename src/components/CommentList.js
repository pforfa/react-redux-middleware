import React, { Component }from 'react';
import { connect } from 'react-redux';

class CommentList extends Component {

    renderComments() {
        return this.props.comments.map((comment, index ) => {
            return (
                <li key={index}>
                    {comment}
                </li>
            )
        });
    }

    render () {
        return (
            <div>
                <ul>
                    <h4>Comment List</h4>
                    {this.renderComments()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    // Return state.comments, since the reducers/index.js
    // exports a reducers called 'comments' in the combinedReducers() function
    return { comments: state.comments }
}

export default connect(mapStateToProps)(CommentList);