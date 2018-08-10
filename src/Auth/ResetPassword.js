import React from 'react'

const ResetPassword = (props) => (

    <div>
        Reset my password:
<input
            placeholder={'Email'}
            type={'email'}
            value={props.emailForResetPassword}
            onChange={props.onEmailForResetPasswordChangedHandler}
        />
        <button
            onClick={props.onResetPasswordClickHandler}
        >
            Reset my password
</button>
    </div>

)

export default ResetPassword