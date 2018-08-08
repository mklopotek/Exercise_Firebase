import React from 'react'
import PropTypes from 'prop-types'

class User extends React.Component {
    state = {
        isEdited: false,
        userName: this.props.user.name
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
                        type='text'
                        onChange={this.onUserNameChangedHandler}
                        value={this.state.userName} />
                    
                </div>

                :

                <div>
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
    user: PropTypes.object.isRequired
}

export default User