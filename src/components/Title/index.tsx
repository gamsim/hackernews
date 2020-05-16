import React from 'react'
import './Title.css'

const Title = ({ score, title, url, by, time }: any) => {
  return (
    <div className='Title'>
      <a
        href={url}
        className='Title-link'
        target='_blank'
        rel='noopener noreferrer'
      >
        {title}
      </a>
      <br />
      <span>{score && `Score - ${score}, By ${by}`}</span>
    </div>
  )
}

export default Title
