import React from 'react'


const LogInForms = (props) => (

    <div>
        <h2>Login!</h2>
        <div>
            <input
                placeholder="Email"
                type="email"
                onChange={props.onlogInEmailChangedHandler}
                value={props.logInEmail}
            />
        </div>
        <div>
            <input
                placeholder="Password"
                type="password"
                onChange={props.onlogInPasswordChangedHandler}
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