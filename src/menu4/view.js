import React, { Component } from 'react';

class Menu4 extends Component {

  handleClick() {
    this.props.history.push({
      pathname: '/menu1',
      param: {
        text: '这是从menu4跳转带过来的参数'
      }
    })
  }

  render() {
    return (
      <div>
        <h3 onClick={this.handleClick.bind(this)}>点击这里，在js中进行跳转！</h3>
      </div>
    )
  }
}

export default Menu4;