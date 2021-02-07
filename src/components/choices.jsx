import React, { Component } from 'react';
import Choice from './choice'

class Choices extends Component 
{
    state = { 
        isLoggingEnabled: true
    }
    
    render() {
        if(this.state.isLoggingEnabled) {
            console.log('Render ', 'Choices', ' Component.')
        }           
        return (
            <div>{
                    this.props.choices.map(choice =>                         
                        <Choice 
                            key={choice.id} 
                            choice={choice}
                            checkChoice={this.props.checkChoice}
                        />
                    )
                } 
            </div>
        );
    }
}
 
export default Choices;