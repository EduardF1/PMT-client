import React, {Component} from 'react';
import {getProject, createProject} from "../../actions/projectActions";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import classNames from "classnames";

class UpdateProject extends React.Component<any, any> {
    public static propTypes = {};

    constructor(props: any) {
        super(props);

        this.state = {
            id: "",
            projectName: "",
            projectIdentifier: "",
            description: "",
            startDate: "",
            endDate: "",
            errors: {}
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps: any) {

        if (nextProps.errors) {
            this.setState({errors: nextProps.errors});
        }
        const {
            id,
            projectName,
            projectIdentifier,
            description,
            startDate,
            endDate,
        } = nextProps.project;

        this.setState({
            id,
            projectName,
            projectIdentifier,
            description,
            startDate,
            endDate
        });
    }

    componentDidMount() {
        const {id} = this.props.match.params;
        this.props.getProject(id, this.props.history);
    }

    onChange(event: any) {
        this.setState({[event.target.name]: event.target.value})
    }

    onSubmit(event: any) {
        event.preventDefault();
        const updateProject = {
            id: this.state.id,
            projectName: this.state.projectName,
            projectIdentifier: this.state.projectIdentifier,
            description: this.state.description,
            startDate: this.state.startDate,
            endDate: this.state.endDate
        };

        this.props.createProject(updateProject, this.props.history);
    }

    render() {
        const {errors} = this.state;

        return (
            <div className="project">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h5 className="display-4 text-center">Update Project form</h5>
                            <hr/>
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className={classNames("form-control form-control-lg mb-2", {
                                            "is-invalid": errors.projectName
                                        })}
                                        placeholder="Project Name"
                                        name="projectName"
                                        value={this.state.projectName}
                                        onChange={this.onChange}
                                    />
                                    {
                                        errors.projectName && (
                                            <div className="invalid-feedback mb-2">{errors.projectName}</div>
                                        )
                                    }
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control form-control-lg mb-2"
                                        placeholder="Unique Project ID"
                                        disabled
                                        name="projectIdentifier"
                                        value={this.state.projectIdentifier}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <textarea
                                        className={classNames("form-control form-control-lg mb-2", {
                                            "is-invalid": errors.description
                                        })}
                                        placeholder="Project Description"
                                        name="description"
                                        value={this.state.description}
                                        onChange={this.onChange}
                                    />
                                    {
                                        errors.description && (
                                            <div className="invalid-feedback mb-2">{errors.description}</div>
                                        )
                                    }
                                </div>
                                <h6>Start Date</h6>
                                <div className="form-group">
                                    <input
                                        type="date"
                                        className="form-control form-control-lg"
                                        name="startDate"
                                        value={this.state.startDate}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <h6>Estimated End Date</h6>
                                <div className="form-group">
                                    <input
                                        type="date"
                                        className="form-control form-control-lg"
                                        name="endDate"
                                        value={this.state.endDate}
                                        onChange={this.onChange}
                                    />
                                </div>

                                <input type="submit" className="btn w-100 btn-primary btn-block mt-4"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

UpdateProject.propTypes = {
    getProject: PropTypes.func.isRequired,
    createProject: PropTypes.func.isRequired,
    project: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = (state: any) => ({
    project: state.project.project,
    errors: state.errors
});

export default connect(mapStateToProps, {getProject, createProject})(UpdateProject);