import React, {Component} from 'react';
import ProjectItem from "./project/ProjectItem";
import ProjectButton from "./project/ProjectButton";
import {connect} from "react-redux";
import {getProjects} from "../actions/projectActions";
import PropTypes from "prop-types";

class Dashboard extends React.Component<any, any> {
    public static propTypes = {};

    componentDidMount() {
        this.props.getProjects();
    }

    render() {
        return (
            <div className="projects">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="display-4 text-center">Projects</h1>
                            <br/>
                            <ProjectButton/>
                            <br/>
                            <hr/>
                            <ProjectItem/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Dashboard.propTypes = {
    project: PropTypes.object.isRequired,
    getProjects: PropTypes.func.isRequired
}

const mapStateToProps = (state: any) => ({
    project: state.project,
})
export default connect(mapStateToProps, {getProjects})(Dashboard);