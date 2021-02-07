import React, { Component } from 'react';

class ButtonBar extends Component {
    state = { 
        isLoggingEnabled: true
     }
    
    renderBackButton = () => {
        if(this.state.isLoggingEnabled) {
            console.log('Call  renderBackButton of ', '', 'ButtonBar', ' Component.')
        } 
        if(this.props.hasPrevious) {            
            return (
                <button 
                    onClick={this.props.clickBack}>Back
                </button>
            )
        }
    }

    renderNextButton = () => {
        if(this.state.isLoggingEnabled) {
            console.log('Call  renderNextButton of ', '', 'ButtonBar', ' Component.')
        } 
        if(this.props.hasNext) {            
            return (
                <button 
                    onClick={this.props.clickNext}>Next
                </button>
            )
        }
    }    

    renderFinishButton = () => {
        if(this.state.isLoggingEnabled) {
            console.log('Call  renderFinishButton of ', '', 'ButtonBar', ' Component.')
        } 

        if(this.props.finished === false && this.props.hasNext === false) {
            return (
                <button 
                    onClick={this.props.clickFinish}>Finish
                </button>
            )            
        }
    }

    render() { 
        return ( 
                    <div>
                        {this.renderBackButton()}
                        {this.renderNextButton()}
                        {this.renderFinishButton()}
                    </div>
         );
    }
}
 
export default ButtonBar;