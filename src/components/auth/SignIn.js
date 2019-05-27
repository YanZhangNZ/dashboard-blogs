import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';

class SignIn extends Component { 
    constructor(){
        super();
        this.state = {
            email:'',
            password:''
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]:e.target.value
        })        
    }
    handleSubmit = (e) => {
        debugger;
        e.preventDefault();
        // console.log(this.state)
        this.props.signIn(this.state)
    }
  

    render(){
        console.log('props for signIn:',this.props);
        const { authError } = this.props;
        return(
             <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Sign In</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange}></input>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange}></input>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Login</button>
                        <div className="red-text center">
                            { authError ? <p>{authError}</p> : null }
                        </div>
                    </div>
                </form>
             </div>
        )
    }
}

//get state from state
const mapStateToProps = (state)=>{
    debugger;
    return{
        //in reducer we have auth, and inside that we have authError
        authError:state.auth.authError
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        signIn:(creds)=>dispatch(signIn(creds))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(SignIn);