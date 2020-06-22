import React from 'react'
import { connect } from 'react-redux'
import { signIn, signOut} from '../Actions'

class GoogleAuth extends React.Component{

    componentDidMount(){
        window.gapi.load('client:auth2', () => {window.gapi.client.init({
            clientId: '53703535184-m9icf5gd8fhi5c3n1fudda73cvg4l0fe.apps.googleusercontent.com',
            scope : 'email'
        }).then(()=> {
            this.auth= window.gapi.auth2.getAuthInstance();
            this.onAuthChange(this.auth.isSignedIn.get());
            this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
    }

    onAuthChange= (isSignedIn) => {
        if(isSignedIn ){
            this.props.signIn(this.auth.currentUser.get().getId());
        }else {
            this.props.signOut();
        }
    }

    handleLogOutClick= () => {
        this.auth.signOut();
    }

    handleLogInClick= () => {
        this.auth.signIn();
    }

    renderAuthButton(){
        if (this.props.isSignedIn === null){
            return null;
        } else if (this.props.isSignedIn){
            return (
                <button className="ui red google button" onClick={this.handleLogOutClick}>
                    <i className="google icon" />
                    Sign Out
                </button>
            )
        } else {
            return (
                <button className="ui blue google button" onClick={this.handleLogInClick}>
                <i className="google icon" />
                Sign In
            </button>)
        }
    }

    render ()
    {
        return (
            <div>{this.renderAuthButton()}</div>
        )
    }
}

const mapStateToProps = (state )=> {
    return { isSignedIn : state.auth.isSignedIn}
}

export default connect(mapStateToProps,
     { signIn ,signOut} 
     )(GoogleAuth);