/* eslint-disable react/prop-types */

// import React, { useState } from "react";
import Post from "./post";
import PostsList from "./postsList";
import { useParams } from "react-router-dom";

const Posts = () => {
    const params = useParams();
    // const [showOffer, setShowOffer] = useState(false)

    const posts = [
        { id: 1, label: "post 1" },
        { id: 2, label: "post 2" },
        { id: 3, label: "post 3" }
    ];
    const { postId } = params;
    console.log(postId);
    // useEffect(() => console.log(search), [search]);

    // const {fromUrl, block} = search
    // useEffect(() => {
    //     if (!showOffer && fromUrl && block) {
    //         setShowOffer(true)
    //     }
    // }, [fromUrl,block,showOffer])

    return (
        <>
            {/* {showOffer && <div>Специальное предложение</div>} */}
            {postId ? (
                <Post posts={posts} id={postId} />
            ) : (
                <PostsList posts={posts} />
            )}
        </>
    );
};

export default Posts;
