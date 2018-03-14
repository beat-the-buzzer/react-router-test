import React, { Component } from 'react';

class Menu2 extends Component{
    render(){
        console.log(this.props.match.params.pid);
        var date = new Date(Number(this.props.match.params.pid));
        return (
            <div>
                <h3>这是传过来的参数：{this.props.match.params.pid}</h3>
                <h3>这是格式化之后得到的值：{date.toString()}</h3>
            </div>
        )
    }
}

export default Menu2;