import React from 'react'
import LogInByGoogle from './LogInByGoogle'
import LogInByEmailAndPassword from './LogInByEmailAndPassword'

const LogInForms = (props) => (
    <div>
        <div>
            Login by Google
        <LogInByGoogle
                onLogInByGoogleClickHandler={props.onLogInByGoogleClickHandler}
            />
        </div>
        <div>
            <LogInByEmailAndPassword

                onLogInByEmailClickHandler={props.onLogInByEmailClickHandler}
                
                onEmailChangedHandler={props.onEmailChangedHandler}
                onPasswordChangedHandler={props.onPasswordChangedHandler}

                logInEmail={props.logInEmail}
                logInPassword={props.logInPassword}

            />
        </div>
    </div>

)


export default LogInForms