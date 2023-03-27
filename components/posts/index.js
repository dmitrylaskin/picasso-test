import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {getPosts, setCurrentPost} from "../../actions";
import {getCurrentUserSelector, getIsPostsLoadingSelector, getPostsSelector} from "../../selectors";
import {Card, Loader} from "semantic-ui-react";
import {NavLink} from "react-router-dom";
import styles from './posts.module.css'

const PostsWrapper = ({posts, currentUser, getPosts, isPostsLoading, setCurrentPost}) => {
    useEffect(() => {
        getPosts(currentUser.id)
    }, [currentUser.id, getPosts])

    const onPostClick = (post) => {
        setCurrentPost(post)
    }

    if (isPostsLoading) {
        return <Loader active/>
    }

    return (
        <div className={styles.posts}>
            {posts.map(post =>
                <NavLink to={'/post'} className={styles.post}>
                    <Card  key={post.id} header={post.title} description={post.body} onClick={() => onPostClick(post)} fluid/>
                </NavLink>)}
        </div>

    );
};

const mapStateToProps = createStructuredSelector({
    posts: getPostsSelector(),
    currentUser: getCurrentUserSelector(),
    isPostsLoading: getIsPostsLoadingSelector()
});

const mapDispatchToProps = {getPosts, setCurrentPost};

const Posts = connect(mapStateToProps, mapDispatchToProps)(PostsWrapper);

export {Posts};