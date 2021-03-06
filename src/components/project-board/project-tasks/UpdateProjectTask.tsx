import React, {Component} from 'react';
import {connect} from "react-redux";
import classNames from "classnames";
import {getProjectTask, updateProjectTask} from "../../../actions/backlogActions";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';

class UpdateProjectTask extends React.Component<any, any> {

    public static propTypes = {};

    // initial component state
    constructor(props: any) {
        super(props);

        this.state = {
            id: "",
            projectSequence: "",
            summary: "",
            acceptanceCriteria: "",
            status: "",
            priority: "",
            dueDate: "",
            projectIdentifier: "",
            createdAt: "",
            errors: {}
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        const {backlogId, projectTaskId} = this.props.match.params;
        this.props.getProjectTask(backlogId, projectTaskId, this.props.history);
    }

    // state after component mount
    componentWillReceiveProps(nextProps: any) {
        if (nextProps.errors) {
            this.setState({errors: nextProps.errors});
        }

        const {
            id,
            projectSequence,
            summary,
            acceptanceCriteria,
            status,
            priority,
            dueDate,
            projectIdentifier,
            createdAt
        } = nextProps.projectTask;

        this.setState({
            id,
            projectSequence,
            summary,
            acceptanceCriteria,
            status,
            priority,
            dueDate,
            projectIdentifier,
            createdAt
        });
    }

    onChange(event: any) {
        this.setState({[event.target.name]: event.target.value});
    }

    onSubmit(event: any) {
        event.preventDefault();
        const updatedProjectTask = {
            id: this.state.id,
            projectSequence: this.state.projectSequence,
            summary: this.state.summary,
            acceptanceCriteria: this.state.acceptanceCriteria,
            status: this.state.status,
            priority: this.state.priority,
            dueDate: this.state.dueDate,
            projectIdentifier: this.state.projectIdentifier,
            createdAt: this.state.createdAt
        };
        this.props.updateProjectTask(this.state.projectIdentifier, this.state.projectSequence, updatedProjectTask, this.props.history);
    }

    render() {
        const {errors} = this.state;
        return (
            <div className="add-PBI">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <Link to={`/projectBoard/${this.state.projectIdentifier}`} className="btn btn-light">
                                Back to Project Board
                            </Link>
                            <h4 className="display-4 text-center">Update Project Task</h4>
                            <p className="lead text-center">Project Name: {this.state.projectIdentifier}|Project Task ID: {this.state.projectSequence}</p>
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className={classNames("form-control form-control-lg", {
                                            "is-invalid": errors.summary
                                        })}
                                        name="summary"
                                        placeholder="Project Task summary"
                                        value={this.state.summary}
                                        onChange={this.onChange}
                                    />
                                    {
                                        errors.summary && (
                                            <div className="invalid-feedback">{errors.summary}</div>
                                        )
                                    }
                                </div>
                                <div className="form-group">
                                    <textarea
                                        className="form-control form-control-lg"
                                        placeholder="Acceptance Criteria"
                                        name="acceptanceCriteria"
                                        value={this.state.acceptanceCriteria ? this.state.acceptanceCriteria : ""}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <h6>Due Date</h6>
                                <div className="form-group">
                                    <input
                                        type="date"
                                        className="form-control form-control-lg"
                                        name="dueDate"
                                        value={this.state.dueDate ? this.state.dueDate : ""}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <select className="form-control form-control-lg"
                                            name="priority"
                                            value={this.state.priority}
                                            onChange={this.onChange}
                                    >
                                        <option value={0}>Select Priority</option>
                                        <option value={1}>High</option>
                                        <option value={2}>Medium</option>
                                        <option value={3}>Low</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <select
                                        className="form-control form-control-lg"
                                        name="status"
                                        value={this.state.status}
                                        onChange={this.onChange}
                                    >
                                        <option value="">Select Status</option>
                                        <option value="TO_DO">TO DO</option>
                                        <option value="IN_PROGRESS">IN PROGRESS</option>
                                        <option value="DONE">DONE</option>
                                    </select>
                                </div>

                                <input type="submit" className="btn btn-primary btn-block mt-4"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

UpdateProjectTask.propTypes = {
    getProjectTask: PropTypes.func.isRequired,
    projectTask: PropTypes.object.isRequired,
    updateProjectTask: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = (state: any) => ({
    projectTask: state.backlog.projectTask,
    errors: state.errors
});

export default connect(mapStateToProps, {getProjectTask, updateProjectTask})(UpdateProjectTask);