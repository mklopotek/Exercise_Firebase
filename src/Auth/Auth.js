import React from 'react'
import LogInForms from './LogInForms';
import { auth } from '../firebaseConfig'
import { googleProvider } from '../firebaseConfig'



class Auth extends React.Component {

    state = {
        isLoggedIn: false,
        logInEmail: '',
        logInPassword: '',
        signUpEmail: '',
        signUpPassword: '',
        emailForResetPassword: ''
    }

    onSignUpEmailChangedHandler = (event) => {
        this.setState({ signUpEmail: event.target.value })
    }

    onSignUpPasswordChangedHandler = (event) => {
        this.setState({ signUpPassword: event.target.value })
    }

    onSignUpByEmailClickHandler = () => {
        auth.createUserWithEmailAndPassword(this.state.signUpEmail, this.state.signUpPassword)
            .catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
            });
    }

    onlogInEmailChangedHandler = (event) => {
        this.setState({ logInEmail: event.target.value })
    }

    onlogInPasswordChangedHandler = (event) => {
        this.setState({ logInPassword: event.target.value })
    }

    onLogInByEmailClickHandler = () => {

        auth.signInWithEmailAndPassword(this.state.logInEmail, this.state.logInPassword)
            .catch(function (error) {
                console.log(error)
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;

                alert(errorMessage)

            });
    }

    onEmailForResetPasswordChangedHandler = (event) => {
        this.setState({ emailForResetPassword: event.target.value })
    }

    onResetPasswordClickHandler = () => {
        
        auth.sendPasswordResetEmail(this.state.emailForResetPassword).then( () => {
          alert('Check your email to reset a password')
          this.setState({emailForResetPassword: ''})
        }).catch(function(error) {
          console.log('Error')
        });

    }

    onLogInByGoogleClickHandler = () => {
        auth.signInWithPopup(googleProvider)
            .catch((error) => alert('Błąd logowania'))
    }

    componentDidMount() {
        auth.onAuthStateChanged(user => {

            if (user) {
                this.setState({ isLoggedIn: true })
            } else {
                this.setState({ isLoggedIn: false })
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

                            onSignUpByEmailClickHandler={this.onSignUpByEmailClickHandler}
                            onSignUpEmailChangedHandler={this.onSignUpEmailChangedHandler}
                            onSignUpPasswordChangedHandler={this.onSignUpPasswordChangedHandler}

                            signUpEmail={this.state.signUpEmail}
                            signUpPassword={this.state.signUpPassword}

                            onLogInByEmailClickHandler={this.onLogInByEmailClickHandler}
                            onlogInEmailChangedHandler={this.onlogInEmailChangedHandler}
                            onlogInPasswordChangedHandler={this.onlogInPasswordChangedHandler}

                            logInEmail={this.state.logInEmail}
                            logInPassword={this.state.logInPassword}

                            onResetPasswordClickHandler={this.onResetPasswordClickHandler}
                            onEmailForResetPasswordChangedHandler={this.onEmailForResetPasswordChangedHandler}

                            emailForResetPassword={this.state.emailForResetPassword}
                        />
                }
            </div>
        )
    }
}

export default Auth