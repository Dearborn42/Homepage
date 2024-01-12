import React from 'react'
import Question from './Question';
import "../Acordian_Styles/main.css"

const Acordian = ({category, data}) => {
  return (
      <div className="container">
        <h3>{category}</h3>
        <section className='info'>
          {data.map(x => (<Question key={x.id} info={x}/>))}
        </section>
      </div>
  )
}

export default Acordian
