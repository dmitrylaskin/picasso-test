export const GET_POSTS = 'GET_POSTS';
export const getPosts = (id) => ({
    type: GET_POSTS,
    id
});

export const SET_POSTS = 'SET_POSTS';
export const setPosts = payload => ({
    type: SET_POSTS,
    payload,
});

export const GET_USERS = 'GET_USERS';
export const getUsers = () => ({
    type: GET_USERS,
});

export const SET_USERS = 'SET_USERS';
export const setUsers = payload => ({
    type: SET_USERS,
    payload,
});

export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const setCurrentUser = payload => ({
    type: SET_CURRENT_USER,
    payload,
});

export const SET_IS_POSTS_LOADING = 'SET_IS_POSTS_LOADING';
export const setIsPostsLoading = payload => ({
    type: SET_IS_POSTS_LOADING,
    payload,
});

export const SET_CURRENT_POST = 'SET_CURRENT_POST';
export const setCurrentPost = payload => ({
    type: SET_CURRENT_POST,
    payload,
});

export const GET_COMMENTS = 'GET_COMMENTS';
export const getComments = (id) => ({
    type: GET_COMMENTS,
    id
});

export const SET_COMMENTS = 'SET_COMMENTS';
export const setComments = payload => ({
    type: SET_COMMENTS,
    payload,
});

export const SET_IS_COMMENTS_LOADING = 'SET_IS_COMMENTS_LOADING';
export const setIsCommentsLoading = payload => ({
    type: SET_IS_COMMENTS_LOADING,
    payload,
});