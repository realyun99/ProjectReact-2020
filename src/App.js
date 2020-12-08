import React, { Component } from 'react';
import { Link, Route, BrowserRouter,Switch} from 'react-router-dom';
import "./App.css"


class Search extends Component{
  constructor(props){
    super(props);

    this.state={
      text: "해시태그",
    };
    this.handleClick=this.handleClick.bind(this);
  }
  handleClick(){
    this.setState({
      text:"맛집",
    });
  }
  render(){
    return(
      <div>
        <input type="text" placeholder="검색할 태그를 입력하세요."/>
        <button onClick={this.handleClick}>search</button>
        <h3>{this.state.text}</h3>
      </div>
    )
  }
}

class App extends Component {
  render(){
    return(
      <div className="App">
        <header className="App-Button">
          <h1>
              <Search/>
          </h1>
          <BrowserRouter>
              <li>
                <Link to="/Info">검색결과확인하기</Link>
              </li>
              <Switch>
                <Route path="/Info" component={Info}></Route>
              </Switch>
          </BrowserRouter>
        </header>
      </div>
    );
  }
}

function Info(){
  return <div>Info : image</div>;
}

export default App;