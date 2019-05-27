
export const signIn = (credentials) => {
    debugger;
    return (dispatch,getState,{getFirebase})=> {
        const firebase = getFirebase();
        //methord from firebase authentication
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(()=>{
            dispatch({
                type:'LOGIN_SUCCESS'
            })
        }).catch((err)=>{
            dispatch({
                type:'LOGIN_ERROR',err
            })
        })
    }
}


export const signOut = () => {
    debugger;
    return (dispatch,getState,{getFirebase})=> {
        const firebase = getFirebase();
        //methord from firebase authentication
        firebase.auth().signOut().then(()=>{
            dispatch({
                type:'SIGNOUT_SUCCESS'
            })
        })
    }
}