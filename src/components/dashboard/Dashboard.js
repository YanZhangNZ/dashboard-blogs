import React,{Component} from 'react';
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

class Dashboard extends Component{
    
    render(){
        const {projects,auth, notifications} = this.props;
        //router guard
        if(!auth.uid) return <Redirect to='./signin' />
        return(
            <div className="dashboard container">
                <div className="row">
                
                    <div className="col s12 m6">
                        <ProjectList projects={projects}/>
                    </div>

                    <div className="col s12 m5 offset-m1">
                        <Notifications notifications={notifications} />
                    </div>

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log('dashboard get state from store and firestore:',state);
    //initially we get data from initState. now we get from firestore
    return{
        // projects: state.project.projects
        projects:state.firestore.ordered.projects,
        auth:state.firebase.auth,
        notifications: state.firestore.ordered.notification
    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection:'projects'},
        {collection:'notification',limit:3}
    ])
)(Dashboard);