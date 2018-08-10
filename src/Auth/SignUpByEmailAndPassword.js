import React from 'react'

const SignUpByEmailAndPassword = (props) => (
    <div>
        <h2>Sign up!</h2>
        <div>
            <input
                placeholder='Your email'
                type="email"
                onChange={props.onSignUpEmailChangedHandler}
                value={props.signUpEmail}

            />
        </div>
        <div>
            <input
                placeholder='Your password'
                type="password"
                onChange={props.onSignUpPasswordChangedHandler}
                value={props.signUpPassword}
            />
        </div>
        <button
            onClick={props.onSignUpByEmailClickHandler}
        >Sign up!</button>
    </div>

)


export default SignUpByEmailAndPassword