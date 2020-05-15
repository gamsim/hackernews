import React from 'react'
import { useSelector } from 'react-redux'

import './Home.css'
import Title from '../components/Title/Title'
import Comment from '../components/Comment/Comment'

import { useFetching } from '../hooks/useFetching'
import { getTopStories, getTopComments } from '../reducers'

interface TopStories {
  topStories: any
}

interface TopComments {
  topComments: any
}

interface Story {
  by: string
  descendants: number
  id: number
  kids: Array<number>
  score: number
  time: number
  title: string
  type: string
  url: string
}

interface Comment {
  by: string
  id: number
  kids: Array<number>
  parent: number
  text: string
  time: number
  type: string
}

function Home() {
  useFetching(getTopStories)
  useFetching(getTopComments)
  const topStories = useSelector((state: TopStories) => state.topStories)
  const topComments = useSelector((state: TopComments) => state.topComments)

  console.log(topComments)

  return (
    <div className='Home'>
      <header className='Home-header'>
        <h1>Hacker News</h1>
      </header>
      <section className='Home-body'>
        <h2>Top Stories</h2>
        {topStories && topStories.length > 0 ? (
          topStories.map((item: Story, index: number) => (
            <Title
              title={item.title}
              url={item.url}
              score={item.score}
              key={index}
            />
          ))
        ) : (
          <p>Loading please wait...</p>
        )}

        <h2>Top Comments</h2>
        <div className='Home-comments'>
          {topComments && topComments.length > 0 ? (
            topComments.map((item: Comment, index: number) => (
              <Comment text={item.text} key={index} />
            ))
          ) : (
            <p>Loading please wait...</p>
          )}
        </div>
      </section>
    </div>
  )
}

export default Home
