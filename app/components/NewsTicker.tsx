import React from 'react'
import './NewsTicker.css'

const NewsTicker = () => {
  const news = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer congue lacus arcu, feugiat faucibus metus fermentum vel.",
    "Sed quis mauris suscipit, vehicula lacus sit amet, volutpat libero. Curabitur nec scelerisque orci.",
    "Praesent lacinia elit ut neque ornare vestibulum ac et dolor. Cras vel urna sed elit porta fringilla eget id nulla.",
    "Praesent bibendum odio id euismod scelerisque. In tempor, ligula nec porta egestas, magna ipsum sodales libero, sit amet ultrices lorem ex vitae justo.",
    "Phasellus vehicula nisi et sem tempor ullamcorper id eget velit. Maecenas ut aliquet mi. Praesent tempor egestas quam, sed tristique est molestie ac."
  ]

  return (
    <div className='news-ticker dark:bg-slate-500 bg-zinc-300 p-2'>
      <p className='dark:text-white text-black flex items-center'>
        {news.map((item, index) =>  <span key={ index + 1 }>{ item }<span className='mx-8 text-xl'>&bull;</span></span> )}
      </p>
    </div>
  )
}

export default NewsTicker