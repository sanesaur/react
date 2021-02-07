import React, { Component } from 'react';
import Question from './question'
import Choices from './choices'
import ButtonBar from './buttonBar'
import QuestionIndex from './questionIndex'
import FinishPage from './finishPage'

class MultipleChoiceQuestions extends Component 
{  
    state = {
        isLoggingEnabled: true
    } 
    constructor(props) {
        super(props)
        this.initialize()
    }

    initialize = () => {
        if(this.state.isLoggingEnabled) {
            console.log('Initialize ', 'MultipleChoiceQuestions', ' Component.')
        }        
        let questions = this.props.questions
        let questionIndex = 0
        let hasNext = false
        let hasPrevious = false
        let finished = false

        if(Array.isArray(questions)) {
            const len = questions.length

            if(questionIndex === len - 1) {
                hasNext = false
            } else {
                hasNext = true           
            }
        }

        this.state = ({
            questions: questions,
            questionIndex: questionIndex,
            hasNext: hasNext,
            hasPrevious: hasPrevious,
            finished: finished
        })
    }


    checkChoice = (checkedChoice, selected) => {        
        if(this.state.isLoggingEnabled) {
            console.log('Call checkChoice of ', 
                    'MultipleChoiceQuestions', 
                    ' Component.')
        } 
        
        const choices = this.state.questions[this.state.questionIndex].choices.map(choice => {        
                if(choice.id === checkedChoice.id) {
                    choice.checked = selected
                }
                return choice
            }
        )
        this.setState({choices})
    }

    clickNext = () => {
        if(this.state.isLoggingEnabled) {
            console.log('Call clickNext of ', 'MultipleChoiceQuestions', 
                    ' Component.')
        }
        
        const length = this.state.questions.length
        let questionIndex = this.state.questionIndex
        questionIndex += 1

        if(questionIndex < length) {
            let hasNext = false
            let hasPrevious = true

            if(questionIndex === length - 1) {
                hasNext = false
            } else {
                hasNext = true
            }

            this.setState({
                questionIndex: questionIndex,
                hasNext: hasNext,
                hasPrevious: hasPrevious
            })
        }
    }

    clickBack = () => {
        if(this.state.isLoggingEnabled) {
            console.log('Call clickBack of ', 'MultipleChoiceQuestions', 
                    ' Component.')
        }
        const length = this.state.questions.length
        let questionIndex = this.state.questionIndex
        questionIndex -= 1

        if(questionIndex >= 0) {
            let hasNext = true
            let hasPrevious = false

            if(questionIndex === 0) {
                hasPrevious = false
            } else {
                hasPrevious = true
            }

            this.setState({
                questionIndex: questionIndex,
                hasNext: hasNext,
                hasPrevious: hasPrevious
            })
        }
    }

    clickFinish = () => {
        if(this.state.isLoggingEnabled) {
            console.log('Call clickFinish of ', 'MultipleChoiceQuestions', 
                    ' Component.')
        }        
        const solvedQuestions = this.state.questions

        this.setState({
            hasNext: false,
            hasPrevious: false,
            finished: true,
            questionIndex: -1
        })        
    }

    clickIndex = (inputQuestionIndex) => {
        if(this.state.isLoggingEnabled) {
            console.log('Call clickIndex of ', 'MultipleChoiceQuestions', 
                    ' Component.')
        } 
        const length = this.state.questions.length
        let questionIndex = this.state.questionIndex
        questionIndex = inputQuestionIndex - 1

        if(inputQuestionIndex > this.state.questionIndex) {           
            if(questionIndex < length) {
                let hasNext = false
                let hasPrevious = true
    
                if(questionIndex === length - 1) {
                    hasNext = false
                } else {
                    hasNext = true
                }
        
                this.setState({
                    questionIndex: questionIndex,
                    hasNext: hasNext,
                    hasPrevious: hasPrevious
                })
            } 
        } else if(inputQuestionIndex <= this.state.questionIndex) {
            if(questionIndex >= 0) {
                let hasNext = true
                let hasPrevious = false
    
                if(questionIndex === 0) {
                    hasPrevious = false
                } else {
                    hasPrevious = true
                }
        
                this.setState({
                    questionIndex: questionIndex,
                    hasNext: hasNext,
                    hasPrevious: hasPrevious
                })
            }
        }
    }

    render() { 
        if(this.state.isLoggingEnabled) {
            console.log('Render ', 'MultipleChoiceQuestions', ' Component.')
        }        

        let questionIndex
        let questionElement
        let choicesElement
        let buttonBarElement
        let finishPageElement

        if(this.state.finished === false ) {
            questionIndex = <QuestionIndex
                                key={ 'qI_' + this.state.questionIndex }
                                questions={this.state.questions}
                                clickIndex={this.clickIndex}
                            />
            questionElement = <Question 
                                    key={ 'q_' + this.state.questionIndex }
                                    id={ this.state.questionIndex + 1 }
                                    text={ this.state.questions[this.state.questionIndex].text }
                                />
            choicesElement = <Choices key= { 'c_' + this.state.questionIndex }
                                choices={ this.state.questions[this.state.questionIndex].choices }
                                checkChoice={this.checkChoice}
                            />
            buttonBarElement = <ButtonBar
                                    clickBack={this.clickBack}
                                    clickNext={this.clickNext}   
                                    clickFinish={this.clickFinish}                                             
                                    hasNext={this.state.hasNext}
                                    hasPrevious={this.state.hasPrevious}
                                    finished={this.state.finished}
                            />
        }
        else {
            finishPageElement = <FinishPage/>
        }

        return (            
            <div>
                {questionIndex}
                {questionElement}
                {choicesElement}
                {buttonBarElement}
                {finishPageElement}
            </div> 
        );
    }
}
 
export default MultipleChoiceQuestions;