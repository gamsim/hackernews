import React from 'react'
import './Comment.css'

function createMarkup(text: any) {
  return { __html: text }
}

const Comment = ({ text, by }: any) => {
  return (
    <div className='Comment'>
      <div dangerouslySetInnerHTML={createMarkup(text)}></div>
      <p>By {by}</p>
    </div>
  )
}

export default Comment
