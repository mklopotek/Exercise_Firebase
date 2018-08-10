import React from 'react'
import LogInForms from './LogInForms';
import { auth } from '../firebaseConfig'
import { googleProvider } from '../firebaseConfig'
import LoadingAuth from './LoadingAuth';

const initState = {
        isLoggedIn: false,
        logInEmail: '',
        logInPassword: '',
        signUpEmail: '',
        signUpPassword: '',
        emailForResetPassword: '',
        repeatedPassword: '',
        isLoadingUserList: false
    }

class Auth extends React.Component {

    state = {
        ...initState
    }

    onSignUpEmailChangedHandler = (event) => {
        this.setState({ signUpEmail: event.target.value })
    }

    onSignUpPasswordChangedHandler = (event) => {
        this.setState({ signUpPassword: event.target.value })
    }

    onSignUpByEmailClickHandler = () => {
        this.setState({ isLoadingUserList: true })

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
        this.setState({ isLoadingUserList: true })

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
        this.setState({ isLoadingUserList: true })

        auth.sendPasswordResetEmail(this.state.emailForResetPassword).then(() => {
            alert('Check your email to reset a password')
            this.setState({ emailForResetPassword: '' })
        }).catch(function (error) {
            console.log('Error')
        });

    }

    onRepeatedPasswordChangedHandler = (event) => {
        this.setState({ repeatedPassword: event.target.value })
    }

    onLogInByGoogleClickHandler = () => {
        auth.signInWithPopup(googleProvider)
            .catch((error) => alert('Błąd logowania'))
    }

    componentDidMount() {
        auth.onAuthStateChanged(user => {

            if (user) {
                this.setState({ isLoggedIn: true, isLoadingUserList: false })
                
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
                        <div>
                            <button
                                onClick={() => auth.signOut()}
                            >
                            Log out!
                            </button>
                            {this.props.children}
                        </div>
                        :
                        this.state.isLoadingUserList ?
                            <LoadingAuth />
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

                                repeatedPassword={this.state.repeatedPassword}
                                onRepeatedPasswordChangedHandler={this.onRepeatedPasswordChangedHandler}
                            />
                }
            </div>
        )
    }
}

export default Auth