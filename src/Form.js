import React, { Component } from 'react';

class Form extends Component {
    state={
        content: ''
    }

    handleChange = (event) => {
        this.setState({
            content: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            content:''
        })
    }

    render(){
        return(
            <div className='form'>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Pridaj novú úlohu" 
                    onChange={this.handleChange}
                    value={this.state.content}/>
                </form>
            </div>
        )
    }
}

export default Form