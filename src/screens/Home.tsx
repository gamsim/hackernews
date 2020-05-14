import React from 'react'
import { useSelector } from 'react-redux'

import './Home.css'
import Card from '../components/Card/Card'
import { useFetching } from '../hooks/useFetching'
import { getTopStories } from '../reducers'

interface RootState {
  topStories: any
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

function Home() {
  useFetching(getTopStories)
  const topStories = useSelector((state: RootState) => state.topStories)
  console.log(topStories)
  return (
    <div className='Home'>
      <header className='Home-header'>
        <h1>Hacker News</h1>
      </header>
      <section className='Home-body'>
        <h2>Top Stories</h2>
        {topStories.map((item: Story, index: number) => (
          <Card title={item.title} url={item.url} key={index} />
        ))}
        <h2>Top Comments</h2>
      </section>
    </div>
  )
}

export default Home
