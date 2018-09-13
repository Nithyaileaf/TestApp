import React, { Component } from 'react';
import LoginView from './LoginView';
import { connect } from 'react-redux';
import * as userActions from '@actions/userActions';
import * as taskActions from '@actions/taskActions';
class LoginContainer extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.userDetails();
        this.props.taskDetails();
    }

    render() {
        return <LoginView {...this.props} />;
    }
}

function mapStateToProps(state) {
    return {
        user: state.userReducer.user,
        list: state.taskReducer.task
    };
}
function mapDispatchToProps(dispatch) {
    return {
        userDetails: () => dispatch(userActions.requestUser()),
        taskDetails: () => dispatch(taskActions.requestTask())
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginContainer);
