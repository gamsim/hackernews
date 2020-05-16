import React from 'react'
import { useSelector } from 'react-redux'

import './Home.css'
import Title from '../../components/Title/Title'
import Header from '../../components/Header/Header'

import { useFetching } from '../../hooks/useFetching'
import { getTopStories } from '../../reducers'

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

interface TopStories {
  topStories: Array<Story>
}

function Home() {
  useFetching(getTopStories)
  const topStories = useSelector((state: TopStories) => state.topStories)
  return (
    <div className='Page'>
      <Header />
      <article className='Page-body'>
        <section>
          <h2>Top Stories</h2>
          {topStories.length > 0 ? (
            topStories.map((item: Story, index: number) => (
              <Title
                title={item.title}
                url={item.url}
                score={item.score}
                by={item.by}
                time={item.time}
                key={index}
              />
            ))
          ) : (
            <p>Loading...</p>
          )}
        </section>
      </article>
    </div>
  )
}

export default Home
