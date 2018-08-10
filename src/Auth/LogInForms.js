import React from 'react'
import LogInByGoogle from './LogInByGoogle'
import LogInByEmailAndPassword from './LogInByEmailAndPassword'
import SignUpByEmailAndPassword from './SignUpByEmailAndPassword';
import ResetPassword from './ResetPassword';

const LogInForms = (props) => (
    <div>
        <div>
            <SignUpByEmailAndPassword
                onSignUpByEmailClickHandler={props.onSignUpByEmailClickHandler}

                onSignUpEmailChangedHandler={props.onSignUpEmailChangedHandler}
                onSignUpPasswordChangedHandler={props.onSignUpPasswordChangedHandler}

                signUpEmail={props.signUpEmail}
                signUpPassword={props.signUpPassword}

                repeatedPassword={props.repeatedPassword}
                onRepeatedPasswordChangedHandler={props.onRepeatedPasswordChangedHandler}
            />
        </div>

        <div>
            <LogInByGoogle
                onLogInByGoogleClickHandler={props.onLogInByGoogleClickHandler}
            />
        </div>
        <div>
            <LogInByEmailAndPassword
                onLogInByEmailClickHandler={props.onLogInByEmailClickHandler}

                onlogInEmailChangedHandler={props.onlogInEmailChangedHandler}
                onlogInPasswordChangedHandler={props.onlogInPasswordChangedHandler}

                logInEmail={props.logInEmail}
                logInPassword={props.logInPassword}
            />
        </div>
        <div>
            <ResetPassword
                onResetPasswordClickHandler={props.onResetPasswordClickHandler}
                emailForResetPassword={props.emailForResetPassword}
                onEmailForResetPasswordChangedHandler={props.onEmailForResetPasswordChangedHandler}
            />
        </div>
    </div>

)


export default LogInForms