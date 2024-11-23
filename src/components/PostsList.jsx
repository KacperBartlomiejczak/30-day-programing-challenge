import { useState } from "react"

import Post from "./Post"
import NewPost from "./NewPost"
import Modal from "./Modal"
import classes from "./PostsList.module.css"

function PostsList({ isPosting, onHideModal }) {
  const [posts, setPosts] = useState([])

  function addPostHandler(postData) {
    
    setPosts((prevPosts) => [postData, ...prevPosts])

    console.log(posts)
  }

  return (
    <>
      {isPosting && (
        <Modal onClose={onHideModal}>
          <NewPost onCancel={onHideModal} onAddPost={addPostHandler} />
        </Modal>
      )}
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post key={post.body} body={post.body} author={post.author} />
          ))}
        </ul>
      )}
      {posts.length === 0 && <div style={{textAlign: 'center', color: 'white'}}>
        <h2>There are no posts yet.</h2>
        <p>Start adding some!</p></div>}
    </>
  )
}

export default PostsList
