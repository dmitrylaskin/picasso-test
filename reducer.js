import {
    SET_COMMENTS,
    SET_CURRENT_POST,
    SET_CURRENT_USER,
    SET_IS_COMMENTS_LOADING,
    SET_IS_POSTS_LOADING,
    SET_POSTS,
    SET_USERS
} from "./actions";

export const initialState = {
    posts: [],
    users: [],
    currentUser: {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        address: {
            street: "Kulas Light",
            suite: "Apt. 556",
            city: "Gwenborough",
            zipcode: "92998-3874",
        },
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
    },
    isPostsLoading: false,
    currentPost: {},
    comments: [],
    isCommentsLoading: false
};

export const postsReducer = (state = initialState, action) => {
    const {type, payload} = action;

    switch (type) {

    case SET_POSTS:
            return {
                ...state,
                posts: payload,
            };
        case SET_USERS:
            return {
                ...state,
                users: payload
            }
        case SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload
            }
        case SET_IS_POSTS_LOADING:
            return {
                ...state,
                isPostsLoading: payload
            }
        case SET_CURRENT_POST:
            return {
                ...state,
                currentPost: payload
            }
        case SET_COMMENTS:
            return {
                ...state,
                comments: payload
            }
        case SET_IS_COMMENTS_LOADING:
            return {
                ...state,
                isCommentsLoading: payload
            }

        default:
            return state;
    }
};

export default postsReducer;

