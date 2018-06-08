import React, {Component} from 'react';
import {connect} from 'react-redux';

import {fetchUsersIfNeeded, selectLanguage} from '../actions';

import Picker from '../components/Picker.jsx';
import UserList from '../components/UserList.jsx';

const LANGUAGES = [
    'javascript',
    'java',
    'python',
    'css',
    'php',
    'c++',
    'c#',
    'c',
    'shell',
    'objective-c',
    'go',
    'perl'
];

class AppContainer extends Component {
    componentDidMount() {
        const {selectedLanguage, fetchUsersIfNeeded} = this.props;
        // this.props.fetchUsersIfNeeded(this.props.language)

        fetchUsersIfNeeded(selectedLanguage);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.selectedLanguage !== this.props.selectedLanguage) {
            const {selectedLanguage, fetchUsersIfNeeded} = nextProps;

            fetchUsersIfNeeded(selectedLanguage);
        }
    }

    handleLanguageChange = language => {
        const {onLanguageSelect} = this.props;
        onLanguageSelect(language);
    };

    render() {
        const {users, selectedLanguage, isFetching} = this.props;

        return (
            <div>
                <Picker
                    value={selectedLanguage}
                    options={LANGUAGES}
                    onChange={this.handleLanguageChange}
                />

                {
                    isFetching
                        ? 'Loading...'
                        : <UserList users={users}/>
                }
            </div>
        );
    }
}

function getUsersByLanguage(state) {
    return state.usersByLanguage[state.language] || {}
}

const mapStateToProps = state => {
    const users = getUsersByLanguage(state)

    return {
        users: users.items || [],
        isFetching: users.isFetching,
        selectedLanguage: state.language
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onLanguageSelect: (language) => dispatch(selectLanguage(language)),
        fetchUsersIfNeeded: (language) => dispatch(fetchUsersIfNeeded(language))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppContainer);
