import React from 'react'
import LogInForms from './LogInForms';
import { auth } from '../firebaseConfig'
import { googleProvider } from '../firebaseConfig'



class Auth extends React.Component {

    state = {
        isLoggedIn: false
    }

    onLogInClickHandler = () => {
        auth.signInWithPopup(googleProvider)
        .catch((error) => alert('Błąd logowania'))
    }

    componentDidMount () {
        auth.onAuthStateChanged( user => {
            console.log(user)
            if(user) {
                this.setState({isLoggedIn: true})
            } else { 
                this.setState({isLoggedIn: false})
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
                        onLogInClickHandler={this.onLogInClickHandler}
                        />
                }
            </div>
        )
    }
}

export default Auth