import React, { Component } from 'react';

class QuestionIndex extends Component {
    state = { 
        questions: this.props.questions,
        isLoggingEnabled: true

     }

    render() { 
        if(this.state.isLoggingEnabled) {
            console.log('Render ', 'QuestionIndex', ' Component.')
        }
        
        let counter = 1

        return (

            <div key="questionIndex"> {
                this.props.questions.map(question =>
                    <span key={"span_question_index_" + counter}>
                        <a key={counter}  
                            onClick={(event) => this.props.clickIndex(question.id)}>
                            {counter++}
                        </a>
                        &nbsp;&nbsp;
                    </span>
                )
            }
            </div>           
        )
    }
}
 
export default QuestionIndex;