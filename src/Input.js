import React, { Component } from 'react';
import './Input.css'

class Input extends Component {
    render () {
        return (
            <div className="input_question">
                <form>
                    
                    <label>Question:</label> 
                    <input type="text" name="question" placeholder="Question..."></input>
                    
                    
                    <label>Type:</label>
                    <select>
                        <option></option>
                        <option>Text</option>
                        <option>Yes / No</option>
                        <option>Number</option>
                    </select>  
                    
                    
                    <input type="submit" value="Add Input"></input>
                </form>
            </div>
        )
    }
}

export default Input;