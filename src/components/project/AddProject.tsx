import React from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {createProject} from "../../actions/projectActions";


class AddProject extends React.Component<any, any> {
    public static propTypes = {};
    constructor(props: any) {
        super(props);

        this.state = {
            projectName: "",
            projectIdentifier: "",
            description: "",
            startDate: "",
            endDate: "",
            errors:{}
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    // lifecycle hooks
    componentWillReceiveProps(nextProps: Readonly<any>, nextContext: any) {
        if(nextProps.errors){
            this.setState({errors:nextProps.errors});
        }
    }

    onChange(event: any) {
        this.setState({[event.target.name]: event.target.value})
    }

    onSubmit(event: any) {
        event.preventDefault(); // prevent page reloading on form submission
        const newProject = {
            projectName: this.state.projectName,
            projectIdentifier: this.state.projectIdentifier,
            description: this.state.description,
            startDate: this.state.startDate,
            endDate: this.state.endDate
        };

        this.props.createProject(newProject, this.props.history);
    }

    render() {
        const {errors} = this.state;

        return (
            <div>
                <div className="project">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 m-auto">
                                <h5 className="display-4 text-center">Create Project form</h5>
                                <hr/>
                                <form onSubmit={this.onSubmit}>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control form-control-lg mb-2"
                                            placeholder="Project Name"
                                            name="projectName"
                                            value={this.state.projectName}
                                            onChange={this.onChange}
                                        />
                                        <p>{errors.projectName}</p>
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control form-control-lg mb-2"
                                            placeholder="Unique Project ID"
                                            name="projectIdentifier"
                                            value={this.state.projectIdentifier}
                                            onChange={this.onChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                    <textarea
                                        className="form-control form-control-lg mb-4"
                                        placeholder="Project Description"
                                        name="description"
                                        value={this.state.description}
                                        onChange={this.onChange}
                                    />
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

                                    <input type="submit" className="btn-lg w-100 btn-primary mt-4"/>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

AddProject.propTypes = {
    createProject: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = (state: { errors: []; }) => ({
    errors : state.errors
})

export default connect(
    mapStateToProps,
    { createProject }
)(AddProject);