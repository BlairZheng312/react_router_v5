import React, { Component } from 'react'
// import qs from 'qs'


const DetailData = [
    { id: '01', content: 'hello world' },
    { id: '02', content: 'hello blair' }
]

export default class Detail extends Component {
    
    render() {
        // use params
        const {id, title} = this.props.match.params

        // // use search
        // const {search} = this.props.location
        // const {id, title} = qs.parse(search.slice(1))

        // // use state
        // const {id, title} = this.props.location.state || {}
        const detail = DetailData.find((detailObj) => { return detailObj.id===id }) || {}
        return (
            <ul>
                <li>ID: {id}</li>
                <li>TITLE: {title}</li>
                <li>CONTENT: {detail.content}</li>
            </ul>
        )
    }
}
