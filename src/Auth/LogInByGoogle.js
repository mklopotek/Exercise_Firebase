import React from 'react'

const LogInByGoogle = (props) => (
    <div>
        <h2>Login by Google!</h2>
        <button
            onClick={props.onLogInByGoogleClickHandler}
        >
            Login By Google
        </button >
    </div>
)

export default LogInByGoogle