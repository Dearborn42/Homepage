import React, {useState} from 'react'
import Question from './Question';
import "../Acordian_Styles/main.css"
import data from "../Utils/data.js"

const Acordian = () => {
  const [questions, setQuestions] = useState(data)
  return (
      <div className="container">
        <h3>Questions and Answers about logins</h3>
        <section className='info'>
          {questions.map(x => (<Question key={x.id} {...x} />))}
        </section>
      </div>
  )
}

export default Acordian
