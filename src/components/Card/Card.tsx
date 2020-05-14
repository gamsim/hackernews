import React from 'react'
import Title from '../Title/Title'
import './Card.css'

const Card = ({ title, url }: any) => {
  return (
    <div className='Card'>
      <Title title={title} url={url} />
    </div>
  )
}

export default Card
