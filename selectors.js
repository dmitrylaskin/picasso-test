import {createSelector} from "reselect";

const postPageDomain = state => state.postsPage

export const getPostsSelector = () =>
    createSelector(postPageDomain, ({posts}) => {
       return posts
    })

export const getUsersSelector = () =>
    createSelector(postPageDomain, ({users}) => {
        return users.map(user => ({key: user.id, text: user.name, value: user}))
    })

export const getCurrentUserSelector = () =>
    createSelector(postPageDomain, ({currentUser}) => {
        return currentUser
    })

export const getIsPostsLoadingSelector = () =>
    createSelector(postPageDomain, ({isPostsLoading}) => {
        return isPostsLoading
    })

export const getCurrentPostSelector = () =>
    createSelector(postPageDomain, ({currentPost}) => {
        return currentPost
    })

export const getCommentsSelector = () =>
    createSelector(postPageDomain, ({comments}) => {
        return comments
    })

export const getIsCommentsLoadingSelector = () =>
    createSelector(postPageDomain, ({isCommentsLoading}) => {
        return isCommentsLoading
    })
