import React, {Component} from 'react';
import {getProject} from "../../actions/projectActions";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import classNames from "classnames";

class UpdateProject extends React.Component<any, any> {
    public static propTypes = {};

    componentDidMount() {
        const {id} = this.props.match.params;
        this.props.getProject(id, this.props.history);
    }

    render() {
        return (
            <div className="project">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h5 className="display-4 text-center">Update Project form</h5>
                            <hr/>
                            <form>
                                <div className="form-group">
                                    <input type="text" className="form-control form-control-lg mb-2" placeholder="Project Name"/>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control form-control-lg mb-2" placeholder="Unique Project ID"
                                           disabled/>
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control form-control-lg mb-2" placeholder="Project Description"/>
                                </div>
                                <h6>Start Date</h6>
                                <div className="form-group">
                                    <input type="date" className="form-control form-control-lg" name="start_date"/>
                                </div>
                                <h6>Estimated End Date</h6>
                                <div className="form-group">
                                    <input type="date" className="form-control form-control-lg" name="end_date"/>
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
    project: PropTypes.object.isRequired
}

const mapStateToProps = (state: any) => ({
    project: state.project.project
});

export default connect(mapStateToProps, {getProject})(UpdateProject);