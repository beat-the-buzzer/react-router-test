##### 路由跳转传递参数

路由跳转传递参数，是我们在实际应用中经常遇到的业务场景。例如，我们查询并展示了数据列表，然后点击查看详情。

我们都知道，用户在提交表单的时候有两种方式，一种是get，一种是post。在后文即将介绍的传递参数的方法，和提交表单的方法有异曲同工之妙。

我们开始实践：

1、使用create-react-app命令，生成一个react项目并进入这个项目：

```shell
create-react-app router-test
cd router-test
```

2、安装react-router-dom

```shell
npm install -s react-router-dom
```

3、修改App.js

```jsx
import React, { Component } from 'react';
import {Link,HashRouter,Route} from 'react-router-dom';

import Menu1 from './menu1/view'
import Menu2 from './menu2/view'
import Menu3 from './menu3/view'

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
            <li><Link to={{pathname:"/menu3",data:{name:"hello",value:"world"}}}>非url带参数</Link></li>
          </ul>
          <Route exact path="/" component={Home}/>
          <Route exact path="/menu1" component={Menu1}/>
          <Route exact path="/menu2/:pid" component={Menu2}/>
          <Route exact path="/menu3" component={Menu3}/>
        </div>
      </HashRouter>
    );
  }
}
export default App;
```

这个页面一共配置了四个路由，我们将一一分析：

 - 首页：这是官方demo的做法，直接在这个页面声明了一个组件并调用，这个没有什么多说的，只是为了凑个字数。

 - 基本应用：这是我们正常开发时需要的做法，要把一些复杂的组件单独拿出来，这样有利于进行组件的复用，src/menu1/view.js:

```js
import React, { Component } from 'react';
class Menu1 extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h3>这是router的基本用法！</h3>
      </div>
    )
  }
}
export default Menu1;
```

 - 参数在地址栏传递：这个神似get方式提交表单。我们在用get方式提交表单的时候，会发现我们输入的参数被拼接在地址栏，同理，我们也是把需要传过来的数据放在地址栏，然后在新的组件中拿到这个数据。
 
 	在App.js中，我们取当前的时间，并使用getTime()方法将其转成距离格林威治时间的毫秒数，然后将其拼接在Link组件中，然后在Route中，将其指向到组件Menu2中，并且用"/menu2/:pid"的方式，把pid传递过去。

	在src/menu2/view.js中，我们使用this.props.match.params.pid取到了这个数据。

```js
import React, { Component } from 'react';
class Menu2 extends Component {
  render() {
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
```

 - "post"方式传递参数：这种说法是我自创的，和post方式提交表单类似，这种传递参数的方式是传递了一个对象，这样，一些私密的东西，例如密码，就不会暴露在地址栏。

	在App.js中，我们使用正常的方式配置route，但是在Link中，我们用了一个特别的方式：我们给Link的to属性传一个对象，这个对象主要有两个部分（事实上不止有两个部分），一个是pathname，就是要跳转的路由，另一个是要传递的数据。然后，在新页面的this.props.location中可以取到这个数据。有一点需要注意：这种方式传递数据的时候，进入了一个新页面，如果此时刷新这个页面，会出错，因为此时没有传过来的数据。

```js
import React, { Component } from 'react';
class Menu3 extends Component {
  render() {
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
```

以上就是react-router传递参数的一个小小总结。之后会总结react router的其他用法。

项目的代码可以直接clone下来，然后：

```shell
npm install
npm start
```


