import React from 'react'
import Default from './Dafault'
import Loading from './Loading';
import List from './List'
import mapObjectToArray from '../utils/mapObjectToArray'

class UserList extends React.Component {

    state = {
        users: null,
        isLoadingUsers: false
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


    render() {

        return (
            <div>
                {
                    this.state.isLoadingUsers ?
                        <Loading />
                        :
                        this.state.users ?
                            <List 
                            users={this.state.users}
                            />
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