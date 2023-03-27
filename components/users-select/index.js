import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {Dropdown} from "semantic-ui-react";
import {getUsers, setCurrentUser} from "../../actions";
import {getCurrentUserSelector, getUsersSelector} from "../../selectors";
import styles from './users-selct.module.css'

const UsersSelectWrapper = ({users, setCurrentUser, currentUser}) => {
    const onSelectChange = (_, {value}) => {
        setCurrentUser(value)
    }

    return (
        <div className={styles.select}>
            <Dropdown  placeholder='Select user'
                       fluid
                       search
                       selection
                       options={users}
                       onChange={onSelectChange}
                       defaultValue={currentUser}
            />
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    users: getUsersSelector(),
    currentUser: getCurrentUserSelector()
});

const mapDispatchToProps = {getUsers, setCurrentUser};

const UsersSelect = connect(mapStateToProps, mapDispatchToProps)(UsersSelectWrapper);

export {UsersSelect};