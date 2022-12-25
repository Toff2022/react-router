import React, {useEffect, useState} from 'react';
import _ from 'lodash'
import Post from "./post";
import PostsList from "./postsList";
import query from "query-string"

const Posts = ({match, location }) => {
    const [showOffer, setShowOffer] = useState(false)

    const posts = [
        {id:1, label:"post 1"},
        {id:2, label:"post 2"},
        {id:3, label:"post 3"},
    ]
    const search = query.parse(location.search)
    const postId = match.params.postId
    // useEffect(() => console.log(search), [search]);
    const cropPosts = search && search!==""
        ? _(posts).slice(0).take(search.count).value()
        : posts
    const {fromUrl, block} = search
    useEffect(() => {
        if (!showOffer && fromUrl && block) {
            setShowOffer(true)
        }
    }, [fromUrl,block,showOffer])


    return (
        <>
            {showOffer && <div>Специальное предложение</div>}
            {postId ? (
                <Post posts={posts} id={postId}/>
            ) : (
                <PostsList posts={cropPosts} />
            )}
        </>
    )
}
 
export default Posts;