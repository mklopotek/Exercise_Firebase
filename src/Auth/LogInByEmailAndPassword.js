import React from 'react'


const LogInForms = (props) => (

    <div>
        <div>
            <input
                placeholder="Email"
                type="email"
                onChange={props.onEmailChangedHandler}
                value={props.logInEmail}
            />
        </div>
        <div>
            <input
                placeholder="Password"
                type="password"
                onChange={props.onPasswordChangedHandler}
                value={props.logInPassword}
            />
        </div>
        <button
            onClick={props.onLogInByEmailClickHandler}
        >
            Login
        </button>
    </div>

)


export default LogInForms