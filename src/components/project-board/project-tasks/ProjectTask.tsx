import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {deleteProjectTask} from "../../../actions/backlogActions";
import PropTypes from "prop-types";
import {connect} from "react-redux";

class ProjectTask extends React.Component<any, any> {
    public static propTypes = {};

    onDeleteClick(backlogId: any, projectTaskId: any) {
        this.props.deleteProjectTask(backlogId, projectTaskId);
    }

    render() {
        const {projectTask} = this.props;
        let priorityString, priorityClass;
        const prioritySpaces = '\xa0'.repeat(26); // prepend 26 white spaces to the string

        switch (projectTask.priority) {
            case 1:
                priorityClass = "bg-danger text-light";
                priorityString = prioritySpaces + "HIGH";
                break;
            case 2:
                priorityClass = "bg-warning text-light";
                priorityString = prioritySpaces.slice(0, 20) + "MEDIUM";
                break;
            case 3:
                priorityClass = "bg-info text-light";
                priorityString = prioritySpaces + "LOW";
                break;
            default:
                break;
        }

        return (
            <div className="card mb-1 bg-light">
                <div className={`card-header text-primary ${priorityClass}`}>
                    ID: {projectTask.projectSequence} -- Priority:{priorityString}
                </div>
                <div className="card-body bg-light">
                    <h5 className="card-title">{projectTask.summary}</h5>
                    <p className="card-text text-truncate ">
                        {projectTask.acceptanceCriteria}
                    </p>
                    <div id="buttons-container">
                        <Link to={`/updateProjectTask/${projectTask.projectIdentifier}/${projectTask.projectSequence}`} className="btn btn-primary">
                            View / Update
                        </Link>
                        <button className="btn btn-danger" id="delete-buttons-size" onClick={this.onDeleteClick.bind(this, projectTask.projectIdentifier, projectTask.projectSequence)}>
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

ProjectTask.propTypes = {
    deleteProjectTask: PropTypes.func.isRequired
}
export default connect(null, {deleteProjectTask})(ProjectTask);
