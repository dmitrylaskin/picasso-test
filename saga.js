import {call, put, takeEvery} from 'redux-saga/effects'
import {
	GET_COMMENTS,
	GET_POSTS,
	GET_USERS,
	setComments,
	setIsCommentsLoading,
	setIsPostsLoading,
	setPosts,
	setUsers
} from "./actions";
import {getComments, getPosts, getUsers} from "./api/api";

function* getPostsSaga({id}) {
	try {
		yield put(setIsPostsLoading(true))
		const response = yield call(getPosts, id);
		yield put(setPosts(response));
	} catch (error) {
        throw new Error(error)
	} finally {
		yield put(setIsPostsLoading(false))
	}
}

function* getUsersSaga() {
	try {
		const response = yield call(getUsers);
		yield put(setUsers(response));
	} catch (error) {
		throw new Error(error)
	}
}

function* getCommentsSaga({id}) {
	try {
		yield put(setIsCommentsLoading(true))
		const response = yield call(getComments, id);
		yield put(setComments(response));
	} catch (error) {
		throw new Error(error)
	} finally {
		yield put(setIsCommentsLoading(false))
	}
}

export default function* sagaWatcher() {
    yield takeEvery(GET_POSTS, getPostsSaga)
    yield takeEvery(GET_USERS, getUsersSaga)
    yield takeEvery(GET_COMMENTS, getCommentsSaga)
}