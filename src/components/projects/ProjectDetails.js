import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id;
    console.log('get id for project detail from props:',id);

  return (
      <div className="container section project-details">
          <div className="card z-depth-0">
            <div className="card-content">
              <h4 className="card-title">project title - {id}</h4>
              <p className="card-text">......</p>
            </div>
            <div className="card-action grey lighten-4 grey-text">
                <div>Posted by: *** </div>
                <div>post time:***</div>
            </div>

          </div>
      </div>
  )
}

export default ProjectDetails
