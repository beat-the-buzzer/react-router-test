import React, { Component } from 'react';

class Menu3 extends Component{
    render(){
        console.log(this.props.location);
       
        return (
            <div>
                <h3>这是传过来的参数name：{this.props.location.data.name}</h3>
                <h3>这是传过来的参数value：{this.props.location.data.value}</h3>
            </div>
        )
    }
}

export default Menu3;