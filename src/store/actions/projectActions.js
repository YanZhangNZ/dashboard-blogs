
const createProject = (project) => {
    //normally we return an object for action
    // return {
    //     type:'ADD_PROJECT',
    //     project:project
    // }

    //now with thunk we return a function
    return (dispatch,getState)=>{
        //make async call to database
        dispatch({type:'CREATE_PROJECT',project:project});
    }
}

export default createProject;