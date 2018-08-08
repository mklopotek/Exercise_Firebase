import React from 'react'
import PropTypes from 'prop-types'

const List = (props) => (
    <div>
        {
            props.users.map(user =>
                <div
                    key={user.key}
                >
                    {user.name}
                </div>
            )
        }

    </div>
)


List.protoTypes = {
    users: PropTypes.array.isRequired
}

export default List