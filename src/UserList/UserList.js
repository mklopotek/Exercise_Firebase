import React from 'react'
import Default from './Dafault'
import Loading from './Loading';
import List from './List'
import mapObjectToArray from '../utils/mapObjectToArray'
import Forms from './Forms'

class UserList extends React.Component {

    state = {
        users: null,
        isLoadingUsers: false,
        newUserName: ''
    }

    loadUsers = () => {

        this.setState({ isLoadingUsers: true })

        fetch('https://sandbox-e5144.firebaseio.com/users.json')
            .then(response => response.json())
            .then(data => {
                const userArray = mapObjectToArray(data)

                this.setState({
                    users: userArray,
                    isLoadingUsers: false
                })
            })
    }

    newUserChangeHandler = (event) => {
        this.setState({
            newUserName: event.target.value
        })
    }

    onAddNewUserClick = () => {

        const request = {
            method: 'POST',
            body: JSON.stringify({ name: this.state.newUserName })
        }

        this.setState({
            isLoadingUsers: true
        })

        fetch('https://sandbox-e5144.firebaseio.com/users.json', request)
            .then(response => {
                this.loadUsers()
                this.setState({
                    newUserName: ''
                })
            }
            )
    }


    render() {

        return (
            <div>
                {
                    this.state.isLoadingUsers ?
                        <Loading />
                        :
                        this.state.users ?
                            <div>
                                <Forms
                                    newUserName={this.newUserName}
                                    newUserChangeHandler={this.newUserChangeHandler}
                                    onAddNewUserClick={this.onAddNewUserClick}
                                />
                                <List
                                    users={this.state.users}
                                />
                            </div>
                            :
                            <Default
                                clickHandler={this.loadUsers}
                                label={'Click me!'}
                            />
                }
            </div>
        );
    }
}




export default UserList