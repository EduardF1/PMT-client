import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class ProjectTask extends React.Component<any, any> {

    render() {
        const {projectTask} = this.props;
        return (
            <div className="card mb-1 bg-light">

                <div className="card-header text-primary">
                    ID: {projectTask.projectSequence} -- Priority: {projectTask.priorityString}
                </div>
                <div className="card-body bg-light">
                    <h5 className="card-title">{projectTask.summary}</h5>
                    <p className="card-text text-truncate ">
                        {projectTask.acceptanceCriteria}
                    </p>
                    <a href="#" className="btn btn-primary">
                        View / Update
                    </a>

                    <button className="btn btn-danger delete-buttons-position">
                        Delete
                    </button>
                </div>
            </div>
        );
    }
}

export default ProjectTask;
