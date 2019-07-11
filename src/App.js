import React, { Component } from 'react';
import { Link, HashRouter, Route } from 'react-router-dom';

import Menu1 from './menu1/view'
import Menu2 from './menu2/view'
import Menu3 from './menu3/view'
import Menu4 from './menu4/view'

const Home = () => <h2>这是首页</h2>

class App extends Component {
  render() {
    const time = new Date().getTime().toString();

    return (
      <HashRouter>
        <div id="wrapper">
          <ul>
            <li><Link to="/">首页</Link></li>
            <li><Link to="/menu1">基本应用</Link></li>
            <li><Link to={`/menu2/${time}`}>url带参数</Link></li>
            <li><Link to={{ pathname: "/menu3", data: { name: "hello", value: "world" } }}>非url带参数</Link></li>
            <li><Link to="/menu4">新增的例子</Link></li>
          </ul>

          <Route exact path="/" component={Home} />
          <Route exact path="/menu1" component={Menu1} />
          <Route exact path="/menu2/:pid" component={Menu2} />
          <Route exact path="/menu3" component={Menu3} />
          <Route exact path="/menu4" component={Menu4} />

        </div>
      </HashRouter>
    );
  }
}

export default App;
