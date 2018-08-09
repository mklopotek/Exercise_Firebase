import React from 'react'
import LogInForms from './LogInForms';

const isLoggedIn = false

const Auth = (props) => (

    <div>
        {
            isLoggedIn ?
                props.children
                :
             <LogInForms />
        }
    </div>
)

export default Auth