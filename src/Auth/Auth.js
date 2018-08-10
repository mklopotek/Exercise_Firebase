import React from 'react'
import LogInForms from './LogInForms';
import { auth } from '../firebaseConfig'
import { googleProvider } from '../firebaseConfig'



class Auth extends React.Component {

    state = {
        isLoggedIn: false,
        logInEmail: '',
        logInPassword:'' 
    }

    onEmailChangedHandler = (event) => {
this.setState({logInEmail: event.target.value})
    }

    onPasswordChangedHandler = (event) => {
this.setState({logInPassword: event.target.value})
    }

    onLogInByGoogleClickHandler = () => {
        auth.signInWithPopup(googleProvider)
        .catch((error) => alert('Błąd logowania'))
    }

    onLogInByEmailClickHandler = () => {

        auth.signInWithEmailAndPassword(this.state.logInEmail, this.state.logInPassword)
            .catch(function(error) {
                console.log(error)
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;

                alert(errorMessage)

            });
    }

    componentDidMount () {
        auth.onAuthStateChanged( user => {

            if(user) {
                this.setState({isLoggedIn: true})
            } else { 
                this.setState({isLoggedIn: false})
            }        
        })
    }

    render() {
        return (
            <div>
                {
                    this.state.isLoggedIn ?
                        this.props.children
                        :
                        <LogInForms 
                        onLogInByGoogleClickHandler={this.onLogInByGoogleClickHandler}
                        onLogInByEmailClickHandler={this.onLogInByEmailClickHandler}

                        onEmailChangedHandler={this.onEmailChangedHandler}
                        onPasswordChangedHandler={this.onPasswordChangedHandler}

                        logInEmail={this.state.logInEmail}
                        logInPassword={this.state.logInPassword}
                        />
                }
            </div>
        )
    }
}

export default Auth