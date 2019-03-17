import React, { Component } from 'react';
import { connect } from 'react-redux';

export default (ChildComponent) => {

    class ComposedComponent extends Component {

        // Our component just got rendered
        componentDidMount() {
            console.log("ComponentDidMount() called from HOC. Check if should navigate away.");
            this.shouldNavigateAway();
        }

        componentDidUpdate() {
            console.log("ComponentDidUpdate() called from HOC. Check if should navigate away.");
            this.shouldNavigateAway();
        }

        shouldNavigateAway() {
            if(!this.props.auth) {
                // React router library is available is a component is rendered by it.
                console.log('Leaving this page. Not authorized to access if not logged in.');
                this.props.history.push('/');
            }
        }

        render() {
            // Always pass down the props from the Higher Order Component down to the children.
            // If this isn't done, then the connect function passes down the action creators down to this HOC (Higher Order Component),
            // and they stay here ONLY. They are never passed down to the child component. This WILL most likely causes errors if the child component
            // uses any of the action creators or any other properties
            return <ChildComponent {...this.props}/>;
        }
    }

    function mapStateToProps(state) {
        return { auth: state.auth };
    }

    return connect(mapStateToProps)(ComposedComponent);
};