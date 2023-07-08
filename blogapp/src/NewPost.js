import React from 'react'

const NewPost = () => {
  return (
    <form>
      <label>
        新規投稿内容
        <span>: </span>
      </label>
      <input type="text"></input>
      <button type="submit">投稿</button>
    </form>
  )
}

export default NewPost