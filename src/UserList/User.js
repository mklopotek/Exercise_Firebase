import React from 'react'
import PropTypes from 'prop-types'

class User extends React.Component {
    state = {
        isEdited: false,
        userName: this.props.user.name,
        isVisable: false,
    }

    editToggle = () => {
        this.setState({
            isEdited: !this.state.isEdited,
            userName: this.props.user.name
        })
    }

    onUserNameChangedHandler = (event) => {
        this.setState({
            userName: event.target.value
        })
    }

    render() {
        return (
            this.state.isEdited ?
                <div>
                    <button
                        onClick={this.editToggle}
                    >
                        Cancel
                    </button>
                    <input
                        disabled={this.state.isVisable}
                        type='text'
                        onChange={this.onUserNameChangedHandler}
                        value={this.state.userName} />
                    <button
                        onClick={() => {
                            this.setState({isVisable: !this.state.isVisable})
                            this.props.onEditUserHandler(
                                this.props.user.key,
                                this.state.userName
                            )
                            .then(()=>
                            this.setState({isEdited: !this.state.isEdited}))
                        }}
                    >
                        Save!
                    </button>
                </div>

                :

                <div>
                    <button
                        onClick={() => this.props.onDeleteUserHandler(this.props.user.key)}
                    >
                        Delete
                    </button>
                    <button
                        onClick={this.editToggle}
                    >
                        Edit!
                    </button>
                    {this.props.user.name}
                </div>
        )
    }
}

User.propTypes = {
    user: PropTypes.object.isRequired,
    onEditUserHandler: PropTypes.func.isRequired
}

export default User