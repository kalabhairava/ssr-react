import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../../actions';

class UsersList extends React.Component {
    componentDidMount() {
        // this.props.fetchUsers();
    }

    render() {
        return (
            <div>
                Here's a big list of users:
                <ul>{this.renderUsersList()}</ul>
            </div>
        );
    }

    renderUsersList() {
        return this.props.users.map((user) => {
            return <li key={user.id}>{user.name}</li>;
        });
    }
}

const mapStateToProps = ({ users }) => ({ users });

export default connect(mapStateToProps, { fetchUsers })(UsersList);
