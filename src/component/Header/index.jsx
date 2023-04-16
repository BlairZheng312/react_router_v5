import React, { Component } from 'react'
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min'
import { Button} from 'antd';

class Header extends Component {
  forward = () => {
    this.props.history.goForward()
  }
  backward = () => {
    this.props.history.goBack()
  }
  go = () => {
    this.props.history.go(2)
  }
  render() {
    console.log(this.props)
    return (
      <div className="page-header">
        <h2>React Router V5 Demo</h2>
        <Button onClick={this.backward}>Backward</Button>
        &nbsp;<Button onClick={this.forward}>Forward</Button>
        &nbsp;<Button onClick={this.go}>Go 2</Button>
      </div>
    )
  }
}

export default withRouter(Header)
