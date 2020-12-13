import React, { Component } from 'react';
import { Link, Route, BrowserRouter,Switch} from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

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
    );
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

class SimpleSlider extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
      
    };
    return (
      <div>
         <h2>태그 이미지</h2>
      <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
      </div>
    );
  }
}

function Info(){
  return (
    <div>
      <SimpleSlider/>
    </div>
    );
}

export default App;