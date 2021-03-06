import React from "react";
import {Link} from "react-router-dom";

const ProjectButton = () => {
    return (
        <React.Fragment>
            <Link to="/addProject" className="btn btn-lg btn-info text-white">
                Create a Project
            </Link>
        </React.Fragment>
    );
};

export default ProjectButton;