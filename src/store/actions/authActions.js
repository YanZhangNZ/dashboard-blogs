
export const signIn = (credentials) => {
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

export const signUp = (newUser) => {
    return (dispatch,getState,{getFirebase,getFirestore}) => {
        const firestore = getFirestore();
        const firebase = getFirebase();

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((res)=>{
            //if 'user' not exist, firebase will create it
            //create a new doc with id
            return firestore.collection('users').doc(res.user.uid).set({
                firstName:newUser.firstName,
                lastName:newUser.lastName,
                initials:newUser.firstName[0]+newUser.lastName[0]
            })
        }).then(()=>{
            dispatch({type:'SIGNUP_SUCCESS'})
        }).catch((err)=>{
            dispatch({type:'SIGNUP_ERROR',err})
        })
    }
}