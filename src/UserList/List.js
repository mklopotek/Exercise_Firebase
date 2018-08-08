import React from 'react'
import PropTypes from 'prop-types'
import User from './User'

const List = (props) => (
    <div>
        {
            props.users.map(user =>
                <User
                    key={user.key}
                    user={user}
                />
            )
        }

    </div>
)


List.propTypes = {
    users: PropTypes.array.isRequired
}

export default List