import React from 'react'
import './Title.css'

const Title = ({ score, title, url }: any) => {
  return (
    <div className='Title'>
      <a
        href={url}
        className='Title-link'
        target='_blank'
        rel='noopener noreferrer'
      >
        {title} {score && `(Score - ${score})`}
      </a>
    </div>
  )
}

export default Title
