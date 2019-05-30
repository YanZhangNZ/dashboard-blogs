

export const createProject = (project) => {
    //without thunk,we return an action
    // return{
    //     type:'ADD_PROJECT',
    //     project:project
    // }
    debugger;
    return (dispatch,getState,{getFirebase,getFirestore}) => {
        //with thunk, we return a function, so we make async call to database
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;

        firestore.collection('projects').add({
            ...project,
            authorFirstName:profile.firstName,
            authorLastName:profile.lastName,
            authorId:authorId,
            createdAt:new Date()
        }).then(() => {
            debugger;
            dispatch({type:'CREATE_PROJECT',project});
        }).catch((err)=>{
            dispatch({type:'CREATE_PROJECT_ERROR',err});
        })
        
    }
};