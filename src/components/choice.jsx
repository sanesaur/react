import React, { Component } from 'react';

class Choice extends Component 
{
    //Internal state of a component
    //Private to component
    state = {  
        isLoggingEnabled: true
    }

    render() {
        if(this.state.isLoggingEnabled) {
            console.log('Render ', 'Choice', ' Component.')
        }   
        return (
                <div id={this.props.choice.id}>
                    <input name={this.props.choice.text}
                            type="checkbox"
                            checked = {this.props.choice.checked}
                            onChange={(event) => this.props.checkChoice(
                            this.props.choice,
                            event.target.checked) }
                    />                        
                    <label>
                        {this.props.choice.text}
                    </label>
                    
                </div>
        );
    }
}
 
export default Choice;