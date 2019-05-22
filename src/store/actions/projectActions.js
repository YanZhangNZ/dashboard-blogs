import db from "../../config/fbConfig";


const createProject = (newProject) => async dispatch => {
    debugger;
    //normally we return an object for action
    // return {
    //     type:'ADD_PROJECT',
    //     project:project
    // }

    //now with thunk we return a function
    db.collection('projects').add({
        ...newProject,//already has title and content inside project, from input in CreateProject component            authorFirstName: 'mumu',
        authorFirstName:'Yan',
        authorLastName:'Zhang',
        authorId: 12345,
        createdAt: new Date()
    })
        .then(
            //after adding new project to db, dispatch create project action
            () => {
                debugger;
                dispatch({type:'CREATE_PROJECT',project:newProject})}
        )
        .catch(
            //otherwise, dispatch an error
            (err)=>{
                debugger;
                dispatch({type:'CREATE_PROJECT_ERROR',err})}
        )        
    }


export default createProject;