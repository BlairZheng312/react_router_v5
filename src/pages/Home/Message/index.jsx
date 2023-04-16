import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import { Button} from 'antd';
import Detail from './Detail'


export default class Message extends Component {
    state = {
        messageArr: [
            { id: '01', title: 'message01' },
            { id: '02', title: 'message02' }
        ]
    }

    // params + replace
    replaceShow = (id, title) => { 
        this.props.history.replace(`/home/message/detail/${id}/${title}`)
    }
    // params + push
    pushShow = (id, title) => { 
        this.props.history.push(`/home/message/detail/${id}/${title}`)
    }


    // // search + replace
    // replaceShow = (id, title) => { 
    //     this.props.history.replace(`/home/message/detail/?id=${id}&title=${title}`)
    // }
    // // search + push
    // pushShow = (id, title) => { 
    //     this.props.history.push(`/home/message/detail/?id=${id}&title=${title}`)
    // }

    // // state + replace
    // replaceShow = (id, title) => {
    //     this.props.history.replace(`/home/message/detail`, { id, title })
    // }
    // // state + push
    // pushShow = (id, title) => {
    //     this.props.history.push(`/home/message/detail/`, { id, title })
    // }

    render() {
        const { messageArr } = this.state
        return (
            <div>
                <ul>
                    {
                        messageArr.map((msgObj) => {
                            return (
                                <li key={msgObj.id}>
                                    {/* use params */}
                                    <Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link>

                                    {/* use search */}
                                    {/* <Link to={`/home/message/detail/?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link> */}

                                    {/* use state */}
                                    {/* <Link to={{ pathname: '/home/message/detail', state: { id: msgObj.id, title: msgObj.title } }}>{msgObj.title}</Link> */}
                                    &nbsp;<Button onClick={() => this.pushShow(msgObj.id, msgObj.title)}>Push</Button>
                                    &nbsp;<Button onClick={() => this.replaceShow(msgObj.id, msgObj.title)}>Replace</Button>
                                </li>
                            )
                        })
                    }
                </ul>
                {/* use params */}
                <Route path='/home/message/detail/:id/:title' component={Detail}></Route>

                {/* use search || state */}
                {/* <Route path='/home/message/detail' component={Detail}></Route> */}
            </div>
        )
    }
}
