import React, { Component } from 'react';

class Question extends Component 
{
    state = { 
        isLoggingEnabled: true
    }

    render() { 
        if(this.state.isLoggingEnabled) {
            console.log('Render ', 'Question', ' Component.')
        }
        return (
            <div key={this.props.id}>
                <b> { this.props.id }.{this.props.text} </b>
            </div>
        );
    }
}
 
export default Question;