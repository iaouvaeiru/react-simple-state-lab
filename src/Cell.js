import React, { Component } from 'react'

export default class Cell extends Component {
    constructor(props){
        super(props)
        this.state = {
            color: this.props.value
        }
    }
    greyOut = (event) => {
        // let colorSelect = event.target.style.backgroundColor
        // console.log(colorSelect)
        // colorSelect = '#FFF'
        // console.log(colorSelect)

        this.setState({
            color: '#333'
        })

    }
    
    render() {
        return (
            <div className="cell" style={{backgroundColor: this.state.color}} onClick={this.greyOut}>
                
            </div>
        )
    }
}

