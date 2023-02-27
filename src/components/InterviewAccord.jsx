import React from 'react'
import Question from './Question'

const InterviewAccord = (props) => {
    const {data}= props
    console.log('data', props)
  return (
    <div className='row'>
      {
        data.map(item=> {
          return <Question key={item.id} {...item} />

        })
      }


    </div>
  )
}

export default InterviewAccord