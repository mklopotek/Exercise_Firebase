import React from 'react'
import Default from './Dafault'
import Loading from './Loading';
import List from './List'
import mapObjectToArray from '../utils/mapObjectToArray'
import Forms from './Forms'
import database from '../firebaseConfig'
import Search from './Search'

class UserList extends React.Component {

    state = {
        users: null,
        isLoadingUsers: false,
        newUserName: '',
        searchPhrase: ''
    }

    initUsersSync = () => {
        this.setState({ isLoadingUsers: true })

        database.ref('/users')
            .on('value', snapshot => {
                this.setState({
                    users: mapObjectToArray(snapshot.val()),
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
                this.setState({
                    newUserName: ''
                })
            })
    }

    onEditUserHandler = (key, newName) => {

        database.ref(`/users/${key}`).update({ name: newName })

        // MAGDA THIS IS THE SAME -> REMEMBER ABOUT THAT :)
        // const request = {
        //     method: "PATCH",
        //     body: JSON.stringify({name: newName})
        // }

        // return fetch(`https://sandbox-e5144.firebaseio.com/users/${key}.json`, request)
    }

    onDeleteUserHandler = (key) => {

        return database.ref(`/users/${key}`).remove()

        // const request = {
        //     method: "DELETE",
        // }

        // fetch(`https://sandbox-e5144.firebaseio.com/users/${key}.json`, request)
    }

    onSearchPhraseChanged = event => {
        this.setState({ searchPhrase: event.target.value })
    }


    render() {

        let filterArray = this.state.users && this.state.users.filter(e =>
                    e.name.indexOf(this.state.searchPhrase) >= 0)

        return (
            <div>
                {
                    this.state.isLoadingUsers ?
                        <Loading />
                        :
                        this.state.users ?
                            <div>
                                <Forms
                                    newUserName={this.state.newUserName}
                                    newUserChangeHandler={this.newUserChangeHandler}
                                    onAddNewUserClick={this.onAddNewUserClick}
                                />

                                <Search
                                    searchPhrase={this.state.searchPhrase}
                                    onSearchPhraseChanged={this.onSearchPhraseChanged}
                                />

                                <List
                                    users={filterArray}
                                    onEditUserHandler={this.onEditUserHandler}
                                    onDeleteUserHandler={this.onDeleteUserHandler}
                                />
                            </div>
                            :
                            <Default
                                clickHandler={this.initUsersSync}
                                label={'Click me!'}
                            />
                }
            </div>
        );
    }
}




export default UserList