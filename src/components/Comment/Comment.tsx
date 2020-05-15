import React from 'react'
import './Comment.css'

function createMarkup(text: any) {
  return { __html: text }
}

const Comment = ({ text }: any) => {
  return (
    <div className='Comment' dangerouslySetInnerHTML={createMarkup(text)} />
  )
}

export default Comment
