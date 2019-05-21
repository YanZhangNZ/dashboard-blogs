import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id;
    console.log('get id for project detail from props:',id);

  return (
      <div class="container section project-details">
          <div class="card z-depth-0">
            <div class="card-content">
              <h4 class="card-title">project title{id}</h4>
              <p class="card-text">......</p>
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
