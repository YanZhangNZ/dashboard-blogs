const initState = {
    authError:null
}

const authReducer = (state = initState,action) => {
    debugger;
    switch(action.type){
        case 'LOGIN_ERROR':
            console.log('login error');
            return {
                ...state,
                authError:'login failed'};
        case 'LOGIN_SUCCESS':
            console.log('login successfully');
            return {
                ...state,
                authError:null
            }
        case 'SIGNOUT_SUCCESS':
            console.log('signout successfully');
            return state;
        default:
            return state;
    }
}

export default authReducer;