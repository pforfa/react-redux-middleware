import React, { Component }from 'react';
import { connect } from 'react-redux';

class CommentList extends Component {

    renderComments() {
        return this.props.comments.map(comment => {
            return (
                <li>
                    {comment}
                </li>
            )
        });
    }

    render () {
        return (
        <div>
            <ul>
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