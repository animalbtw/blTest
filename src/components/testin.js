import React, { Component } from 'react'
import './testing.module.css'




class Testing extends Component {


    state = {
        value: '',
        color: 'Num1 + Num2'
    }


    handleChange = (event) => {
        this.setState({value: event.target.value})
    }
    

    render() {
        const {color, value} = this.state

        const Result = () => {
            let num1 = parseInt(document.getElementById('number1').value)
            let num2 = parseInt(document.getElementById('number2').value)
            let sum = num1 + num2
            window.alert(sum)
        }

        
        return (
            <div className='mainContent container'>
                <div className='Header row justify-content-center'>
                    <h1 style={{color: value}}>{color}</h1>
                </div>
                <div className='inputForm row'>
                    <input id='number1' className='col-sm' type='number' maxLength='3' />
                    <div className='col-sm-1'></div>
                    <input id='number2' className='col-sm' type='number' maxLength='3' />
                </div>
                <div className='smth'>
                    <button type='button' id='res' className='btn btn-success offset-sm-10 col-sm-2' value='result' onClick={Result}>Result</button>
                    <input id='colorChanger' className='offset-sm-11 col-sm-1' type='color' onChange={this.handleChange}/>
                </div>
            </div>
        )
    
}
}


export default Testing