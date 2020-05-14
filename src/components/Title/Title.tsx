import React from 'react'
import './Title.css'

const Title = ({ title, url }: any) => {
  return (
    <a
      href={url}
      className='Title-link'
      target='_blank'
      rel='noopener noreferrer'
    >
      {title}
    </a>
  )
}

export default Title
