import api from '../api';

export const SELECT_LANGUAGE = 'SELECT_LANGUAGE';
export const REQUEST_USERS = 'REQUEST_USERS';
export const RECEIVE_USERS = 'RECEIVE_USERS';

export const selectLanguage = language => ({
	type: SELECT_LANGUAGE,
	language
});

export const requestUsers = language => ({
	type: REQUEST_USERS,
	language
});

export const receiveUsers = (language, data) => ({
	type: RECEIVE_USERS,
	language,
	users: data.data.items,
	fetchedAt: Date.now()
});

export const fetchUsers = language => dispatch => {
	dispatch(requestUsers(language));

	return api.getPopularUsersByLanguage(language)
		.then(data => dispatch(receiveUsers(language, data)));
};
const INVALIDATION_TIME = 30000;

const shouldFetchUsers = (state, language) => {
	const users = state.usersByLanguage[language];

	if (users && Date.now() - users.fetchedAt < INVALIDATION_TIME) {
		return false;
	}
	return true;
};
export const fetchUsersIfNeeded = language => (dispatch, getState) => {
	if (shouldFetchUsers(getState(), language)) {
		return dispatch(fetchUsers(language));
	}
};