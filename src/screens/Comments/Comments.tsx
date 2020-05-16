import React from 'react'
import { useSelector } from 'react-redux'

import './Comments.css'
import Comment from '../../components/Comment/Comment'
import Header from '../../components/Header/Header'

import { useFetching } from '../../hooks/useFetching'
import { getTopComments } from '../../reducers'

interface Comment {
  by: string
  id: number
  kids: Array<number>
  parent: number
  text: string
  time: number
  type: string
}

interface TopComments {
  topComments: Array<Comment>
}

function Comments() {
  useFetching(getTopComments)
  const topComments = useSelector((state: TopComments) => state.topComments)
  return (
    <div className='Page'>
      <Header />
      <article className='Page-body'>
        <section>
          <h2>Top Comments</h2>
          {topComments.length > 0 ? (
            topComments.map((item: Comment, index: number) => (
              <Comment text={item.text} by={item.by} key={index} />
            ))
          ) : (
            <p>Loading...</p>
          )}
        </section>
      </article>
    </div>
  )
}

export default Comments
