import React, {useEffect} from 'react';
import {Card, Comment, Loader} from "semantic-ui-react";
import {createStructuredSelector} from "reselect";
import {connect} from "react-redux";
import {
    getCommentsSelector,
    getCurrentPostSelector,
    getCurrentUserSelector,
    getIsCommentsLoadingSelector
} from "../../selectors";
import {Header} from "../header";
import {getComments, getPosts} from "../../actions";
import {UserInfo} from "../user-info";
import styles from './post.module.css'

const PostPageWrapper = ({currentPost, currentUser, getComments, comments, isCommentsLoading, getPosts}) => {
    useEffect(() => {
        getComments(currentPost.id)
        getPosts(currentUser.id)
    }, [])

    return (
        <div>
            <Header title={`Posts / ${currentUser.username}`} hasGoBackButton/>
            <div className={styles.content}>
                <h3>User info:</h3>
                <UserInfo name={currentUser.name} username={currentUser.username} email={currentUser.email}
                          address={currentUser.address} phone={currentUser.phone} website={currentUser.website}/>
                <h3>Post</h3>
                <Card header={currentPost.title} description={currentPost.body} fluid/>
                <h3>Comments</h3>
                <div className={styles.comments}>
                    {isCommentsLoading ? <Loader active inline/> : comments.map(comment => (
                        <Comment className={styles.comment}>
                            <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/matt.jpg'/>
                            <Comment.Content className={styles.commentContent}>
                                <Comment.Author as='a'>{comment.name}</Comment.Author>
                                <Comment.Metadata>
                                    <span className={styles.email}>{comment.email}</span>
                                </Comment.Metadata>
                                <Comment.Text>{comment.body}</Comment.Text>
                            </Comment.Content>
                        </Comment>
                    ))}
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    currentPost: getCurrentPostSelector(),
    currentUser: getCurrentUserSelector(),
    comments: getCommentsSelector(),
    isCommentsLoading: getIsCommentsLoadingSelector()
})

const mapDispatchToProps = {getComments, getPosts}

const PostPage = connect(mapStateToProps, mapDispatchToProps)(PostPageWrapper)

export default PostPage;