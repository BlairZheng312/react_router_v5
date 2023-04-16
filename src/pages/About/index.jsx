import React, { Component } from 'react'

export default class About extends Component {
    componentDidMount(){
        setTimeout(() => { 
            this.props.history.push('/home')
         }, 2000)
    }
    render() {
        return (
            <h3>I am ABOUT</h3>
        )
    }
}
