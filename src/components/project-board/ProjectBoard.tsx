import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Backlog from './Backlog';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getBacklog} from '../../actions/backlogActions';

class ProjectBoard extends React.Component<any, any> {
    public static propTypes = {};

    constructor(props: any) {
        super(props);
        this.state = {
            errors: {}
        };
    }

    componentDidMount() {
        const {id} = this.props.match.params;
        this.props.getBacklog(id);
    }

    UNSAFE_componentWillReceiveProps(nextProps: any) {
        this.setState(nextProps.errors ? {errors: nextProps.errors} : {});
    }

    render() {
        const {id} = this.props.match.params;
        const {projectTasks} = this.props.backlog;
        const {errors} = this.state;
        let boardContent;
        const boardErrorHandler = (errors: any, projectTasks: any) => {
            return (projectTasks.length < 1) ? (errors.projectNotFound) ?
                    <div className="alert alert-danger text-center" role="alert">{errors.projectNotFound}</div> :
                    <div className="alert alert-info text-center" role="alert">No Project Tasks on this board.</div> :
                    <Backlog projectTasks={projectTasks}/>
        }

        boardContent = boardErrorHandler(errors, projectTasks);
        return (
            <div className="container">
                <Link to={`/addProjectTask/${id}`} className="btn btn-primary mb-3">
                    <i className="fas fa-plus-circle"> Create Project Task</i>
                </Link>
                <br/>
                <hr/>
                {boardContent}
            </div>
        );
    }
}

ProjectBoard.propTypes = {
    backlog: PropTypes.object.isRequired,
    getBacklog: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = (state: any) => ({
    backlog: state.backlog,
    errors: state.errors
});

export default connect(mapStateToProps, {getBacklog})(ProjectBoard);