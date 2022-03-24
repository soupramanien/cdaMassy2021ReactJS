import React, { Component } from 'react'
import { QuestionsProvider } from '../../contexts/questions.context'
import QuestionWorkspace from '../questions/QuestionWorkspace'

export default class Dashbord extends Component {
  render() {
    return (
     
        
			
			<div className='container'>
				<QuestionsProvider>
				<QuestionWorkspace />
				</QuestionsProvider>
      </div>
    )
  }
}
